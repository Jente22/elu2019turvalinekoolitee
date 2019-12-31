foreach ($type in "lapsed", "vanemad") {
  $tulemused = Import-Csv .\tulemused_$type.csv -Encoding UTF8 -Delimiter ";"
  $kysimused = $tulemused[0].psobject.Properties.Name
  $output = [ordered]@{ }
  2..($kysimused.Count - 1) | ForEach-Object {
    $kysimus = $kysimused[$_]
    $output.$kysimus = @{ }
    $tulemused.$kysimus | Group-Object | ForEach-Object {
      $output.$kysimus[$_.Name] = $_.Count
    }
  }
  $output | ConvertTo-Json | Out-File tulemused_$type.json -Encoding UTF8
}