let HomePoints = document.getElementById("HomePoints")
let GuestPoints = document.getElementById("GuestPoints")

let pointTeamH = 0
let pointTeamG = 0

function plusOneH(){
    pointTeamH += 1
    HomePoints.textContent = pointTeamH
}

function plusTwoH(){
    pointTeamH += 2
    HomePoints.textContent = pointTeamH
}

function plusThreeH(){
    pointTeamH += 3
    HomePoints.textContent = pointTeamH
}

function plusOneG(){
    pointTeamG += 1
    HomePoints.textContent = pointTeamG
}

function plusTwoG(){
    pointTeamG += 2
    HomePoints.textContent = pointTeamG
}

function plusThreeG(){
    pointTeamG += 3
    HomePoints.textContent = pointTeamG
}