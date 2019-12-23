$excludedQuestions= "Kas sinu hinnangul saaks kool midagi kooli ümbruse ohutumaks muutmiseks teha?",
  "Mis põhjustel sind autoga kooli viiakse?",
  "Kas kooliteel esineb järgnevaid ohte? Märgi kõik ohud",
  "Miks just see vahend kooli minekuks?",
  "Miks just see vahend koolist tulemiseks?",
  "Kas ja mis teie elus muutuks kui teie laps iseseisvalt rohkem koolis käiks",
  "Kas ja mis tingimustel sa oleks laps valmis/nõus rohkem iseseisvalt koolis käima?",
  "Milliseid muid lahendusi pakute välja selleks et kooli ümbrust ohutumaks muuta?",
  "Milliseid ohtlikke liiklussituatsioone olete kooli ümbruses tähele pannud?",
  "Kas teie hinnangul saaks kool midagi kooli ümbruse ohutustamiseks teha?",
  "Milline on teie enda liikluskäitumine kooli ümbruses?"
foreach ($type in "lapsed", "vanemad") {
    $tulemused = Import-Csv .\tulemused_$type.csv -Encoding UTF8
    $kysimused = $tulemused[0].psobject.Properties.Name
    $output = [ordered]@{}
    2..($kysimused.Count-1) | ForEach-Object { # 2..10+12..18+20+22+24..25+27+29..31
      $kysimus = $kysimused[$_]
      
      if ($excludedQuestions -notcontains $kysimus) { 
        $output.$kysimus = @{}
        $tulemused.$kysimus | Group-Object | ForEach-Object {
          $output.$kysimus[$_.Name] = $_.Count
        }
      }
    }
    $output | ConvertTo-Json | Out-File tulemused_$type.json -Encoding UTF8
}