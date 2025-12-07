function Run-Block {
    param(
        [switch]$All,
        [string]$Category,
        [int[]]$Numbers,
        [switch]$Log
    )

    # Counters
    $executedCount   = 0
    $culinaryCount   = 0
    $serviceCount    = 0
    $operationsCount = 0

    # Category lookup
    $blockCategories = @{
        3 = "Culinary"; 4 = "Culinary"; 5 = "Culinary"
        6 = "Service";  7 = "Service";  9 = "Service"
        8 = "Operations"; 10 = "Operations"; 11 = "Operations"
    }

    # Helper: print block and increment counters
    function Print-Block($blockName, $blockNumber) {
        Write-Host ">>> Executing $blockName" -ForegroundColor Cyan
        $executedCount++

        switch ($blockCategories[$blockNumber]) {
            "Culinary"   { $culinaryCount++ }
            "Service"    { $serviceCount++ }
            "Operations" { $operationsCount++ }
        }
    }

    # Execution logic
    if ($All) {
        foreach ($n in $blockCategories.Keys) {
            Print-Block "Block$n" $n
        }
    }
    elseif ($Category) {
        foreach ($n in $blockCategories.Keys) {
            if ($blockCategories[$n] -eq $Category) {
                Print-Block "Block$n" $n
            }
        }
    }
    elseif ($Numbers) {
        foreach ($n in $Numbers) {
            if ($blockCategories.ContainsKey($n)) {
                Print-Block "Block$n" $n
            }
        }
    }

    # Footer
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $footer = @"
=== Run completed at $timestamp ===
Total blocks executed: $executedCount
Culinary: $culinaryCount, Service: $serviceCount, Operations: $operationsCount
"@

    Write-Host $footer -ForegroundColor DarkGray

    if ($Log) {
        $logPath = "$env:USERPROFILE\Documents\DynamicApron.log"
        $footer | Out-File -FilePath $logPath -Append
    }
}