function calculateBmi(){
            let height = document.getElementById("height").value;
            let weight = document.getElementById("weight").value;

            height/= 100.0;

            let bmi = (weight / (height * height)).toFixed(2);
            if(bmi < 16){
                document.getElementById("bmi").innerHTML = bmi + " Wygłodzenie, ryzyko chorób: minimalne";
                document.getElementById("bmi").style.color="blue";
            }
            else if(bmi > 16 && bmi < 16.99){
                document.getElementById("bmi").innerHTML = bmi + " Wychudzenie, ryzyko chorób: minimalne";
                document.getElementById("bmi").style.color="lightblue";
            }
            else if(bmi > 17 && bmi < 18.49){
                document.getElementById("bmi").innerHTML = bmi + " Niedowaga, ryzyko chorób: minimalne";
                document.getElementById("bmi").style.color="lightgreen";
            }
            else if(bmi > 18.5 && bmi < 24.99){
                document.getElementById("bmi").innerHTML = bmi + " Pożądana masa ciała, ryzyko chorób: minimalne";
                document.getElementById("bmi").style.color="green";
            }
            else if(bmi > 25 && bmi < 29.99){
                document.getElementById("bmi").innerHTML = bmi + " Nadwaga, ryzyko chorób: średnie";
                document.getElementById("bmi").style.color="lightyellow";
            }
            else if(bmi > 30 && bmi < 34.99){
                document.getElementById("bmi").innerHTML = bmi + " Otyłość I stopnia, ryzyko chorób: wysokie";
                document.getElementById("bmi").style.color="yellow";
            }
            else if(bmi > 35 && bmi < 39.99){
                document.getElementById("bmi").innerHTML = bmi + " Otyłość II stopnia, ryzyko chorób: bardzo wysokie";
                document.getElementById("bmi").style.color="red";
            }
            else if(bmi > 40){
                document.getElementById("bmi").innerHTML = bmi + " Otyłość III stopnia, ryzyko chorób: eksremalne";
                document.getElementById("bmi").style.color="darkred";
            }
            else{
                document.getElementById("bmi").innerHTML = "Podano nieprawidłowe dane";
            }
            

        }