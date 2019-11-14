let capture
let tracker
let mouth = 'closed'
let facing
let eyes = 'normal'

let angle1 = 0
let angle2 = 0
let angle3 = 0

let R = 255
let G = 0
let B = 0

let health = 500
    let healthX = 20
    let healthY = 20

let enemy1X = 1000
let enemy1Y = 530
let enemy1D = 'forward'

let enemy2X = 1100
let enemy2Y = 530
let enemy2D = 'forward'

let enemy3X = -250
let enemy3Y = 530
let enemy3D = 'forward'

let enemy4X = -500
let enemy4Y = 530
let enemy4D = 'forward'

let wind1X
let wind1Y
let wind2X
let wind2Y
let wind3X
let wind3Y

let ouchVar = 0

function setup() {

    createCanvas(800, 600)
    capture = createCapture(VIDEO) //This captures an image from the camera
    capture.size(800, 600)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)    

    screm = new p5.Oscillator()
    screm.setType("sawtooth")

    env = new p5.Envelope()
    env.setADSR(0, 0.1, 0.1, 0.5)

    noise = new p5.Noise()
    noise.setType("pink") 
    noise.amp(0)

    noise_env = new p5.Envelope()
    noise_env.setADSR(0, 0, 0.1, 0.6)

    ouch = new p5.Noise()
    ouch.setType("brown") 
    ouch.amp(0)

    ouch_env = new p5.Envelope()
    ouch_env.setADSR(0, 0.5, 0.1, 0.1)

}


function draw() {    //what would a digital mask for yourself look like? How do you feel with your split identity through devices

    background(0)
    //image(capture, 0, 0, capture.width, capture.height) //This shows the captured image

    let positions = tracker.getCurrentPosition() //returns an array of positions

    stroke(255, 0, 0)
    fill(255, 0, 0)

    rect (40, 40, health, 10)
    textSize(20)
    text ('Health:', 40, 30)
    
    stroke(255)
    fill(100, 50, 0)
    rect(width/2-25, height-40, 50, 50)
        fill(200)
        rect(width/2-15, height-70, 10, 30, 5)
        rect(width/2-15, height-50, 30, 10, 5)


    fill(100) //little computer person
    rect(width/2+35, height-65, 5, 50)
    ellipse(width/2+35, height-65, 20, 20)
    line(width/2+35, height-15, width/2+25, height)
    line(width/2+40, height-15, width/2+45, height)
        line(width/2+35, height-55, width/2+15, height-50)
        line(width/2+40, height-55, width/2+15, height-45)


        //---------------------------------------------------------------------------------------------*Enemy Spotted*
        
push()
    translate(enemy4X, enemy4Y);
        fill(250, 230, 190)
        rect(0, 0, 40, 55)
        textSize(8)
        fill(0)
        text('Homework', 1, 10)
        stroke(0)
        line(10, 15, 30, 15)
        line(10, 23, 30, 23)
        line(10, 31, 30, 31)
        line(10, 39, 30, 39)
        line(10, 47, 30, 47)
pop()
push()
    translate(enemy1X, enemy1Y);
        fill(250, 230, 190)
        rect(0, 0, 40, 55)
        textSize(8)
        fill(0)
        text('Exam', 5, 10)
        stroke(0)
        textSize(5)
        text('1)', 6, 16)
        line(10, 23, 30, 23)
        text('2)', 6, 32)
        line(10, 39, 30, 39)
        line(10, 47, 30, 47)
pop()
push()
    translate(enemy3X, enemy3Y);
        stroke(100, 75, 30)
        fill(200, 200, 0)
        triangle(15, 21, 2, 49, 50, 47)
        fill(200, 50, 0)
        ellipse(16, 45, 5, 5)    
        ellipse(28, 37, 5, 5)
        ellipse(29, 42, 5, 5)
        ellipse(20, 36, 5, 5)
        ellipse(34, 45, 5, 5)
        fill(100, 75, 30)
        quad(2, 49, 15, 21, 20, 26, 8, 48)
pop()
push()
    translate(enemy2X, enemy2Y)
        stroke(0)
        fill(225)
        angle1 += .1
        angle2 += .025
        angle3 += .05
        ellipse(40, 40, 60, 60)
        arc(40, 40, 60, 60, angle1, angle1+.01, PIE)
        arc(40, 40, 60, 60, angle2, angle2+.01, PIE)

pop()
        
    

    if (mouth == 'open' && facing == 'left'){ //Enemy 1
        enemy1D = 'backward'
    }

    if (enemy1X >= 820) { //-----------------------------for some reason enemy 1 isn't working. Inexplicable. 
        enemy1D = 'forward'
    }

    if (mouth == 'closed') {
        enemy1D = 'forward'
    }

    if (enemy1X <= width/2){
        enemy1X = 900
        health = health-50
            ouch.start()
            ouch.amp(noise_env)
            ouch_env.triggerAttack()
            // ouch_env.triggerRelease()
            ouchVar = 1
    }

        if (enemy1D == 'forward'){
            enemy1X = enemy1X-1.5
        }

        if (enemy1D == 'backward'){
            enemy1X = enemy1X+4.5
        }


    if (mouth == 'open' && facing == 'left'){ //Enemy 2
        enemy2D = 'backward'
    }

    if (enemy2X >= 1250) {
        enemy2D = 'forward'
    }

    if (mouth == 'closed') {
        enemy2D = 'forward'
    }

    if (enemy2X <= width/2){
        enemy2X = 1500
        health = health-25
            ouch.start()
            ouch.amp(noise_env)
            ouch_env.triggerAttack()
            //ouch_env.triggerRelease()
            ouchVar = 1
    }

        if (enemy2D == 'forward'){
            enemy2X = enemy2X-3.25
        }

        if (enemy2D == 'backward'){
            enemy2X = enemy2X+7
        }

    if (mouth == 'open' && facing == 'right'){ //Enemy 3
        enemy3D = 'backward'
    }

    if (enemy3X <= -50) {
        enemy3D = 'forward'
    }

    if (mouth == 'closed') {
        enemy3D = 'forward'
    }

    if (enemy3X >= width/2){
        enemy3X = -125
        health = health-50
            ouch.start()
            ouch.amp(noise_env)
            ouch_env.triggerAttack()
            //ouch_env.triggerRelease()
            ouchVar = 1
    }

        if (enemy3D == 'forward'){
            enemy3X = enemy3X+1
        }

        if (enemy3D == 'backward'){
            enemy3X = enemy3X-4
        }

    if (mouth == 'open' && facing == 'right'){ //Enemy 4
        enemy4D = 'backward'
    }

    if (enemy4X <= -500) {
        enemy4D = 'forward'
    }

    if (mouth == 'closed') {
        enemy4D = 'forward'
    }

    if (enemy4X >= width/2){
        enemy4X = -600
        health = health-25
            ouch.start()
            ouch.amp(noise_env)
            ouch_env.triggerAttack()
            //ouch_env.triggerRelease()
            ouchVar = 1
    }

        if (enemy4D == 'forward'){
            enemy4X = enemy4X+3
        }

        if (enemy4D == 'backward'){
            enemy4X = enemy4X-7.5
        }

    if (eyes == 'laser' && facing == 'left') {
        enemy1X = 900
        enemy2X = 1500
    }

    if (eyes == 'laser'&& facing == 'right') {
        enemy3X = -125
        enemy4X = -600
    }



    if (ouchVar == 1) {
        ouch.start()
        ouch.amp(ouch_env)
        ouch_env.triggerAttack()
        ouch_env.triggerRelease()
        ouchVar = 0
    }



    if (eyes == 'laser'){ //--------------------------------------------------sounds---------------------------------

        screm.start()
        screm.amp(env)
        screm.freq(850)
        env.triggerAttack()
    } else {
        env.triggerRelease()
    }


    if (mouth == 'open') {
        noise.start()
        noise.amp(noise_env)
        noise_env.triggerAttack()
    } else {
        noise_env.triggerRelease()
    }

    stroke(255)
    fill(255, 0, 0)




    let i = 0
    while (i < positions.length) {

            
            
            //line(positions[i][0], positions[i][1], positions[i+1][0], positions[i+1][1]) 
            //if you want this command to run, put the while command to 'positions.length-1' because it goes up UNTIL the length.

        //ellipse(positions[i][0], positions[i][1], 4, 4) //face-tracking balls
        textSize(10)
        //text(i, positions[i][0], positions[i][1])          //the text tells what the 'i' variable is


        i += 1
    }


    if (positions.length > 0) {

        let projector1 = random(positions)
        let projector2 = random(positions)
        line (width/2-10, height-65, projector1[0], projector1[1])
        line (width/2-10, height-65, projector2[0], projector2[1])

        let noseX = positions[62][0]
        let noseY = positions[62][1]

        let leftNostrilX = positions[43][0]
        let leftNostrilY = positions[43][1]

        let rightNostrilX = positions[42][0]
        let rightNostrilY = positions[42][1]

            let distanceLeft = dist(noseX, noseY, leftNostrilX, leftNostrilY) 
            let distanceRight = dist(noseX, noseY, rightNostrilX, rightNostrilY)

            if (distanceLeft > distanceRight) {
                facing = 'right'
            } else {
                facing = 'left'
            }


        let ulipX = positions[60][0]
        let ulipY = positions[60][1]

        let llipX = positions[57][0]
        let llipY = positions[57][1]

        let mouthDist1X = positions[44][0]
        let mouthDist1Y = positions[44][1]

        let mouthDist2X = positions[50][0]
        let mouthDist2Y = positions[50][1]

            let lipDist = dist(ulipX, ulipY, llipX, llipY)

            if (lipDist >= 30) {
                mouth = 'open'
                print('open')
            } else {
                mouth = 'closed'
            }

            let mouthDist = dist(mouthDist1X, mouthDist1Y, mouthDist2X, mouthDist2Y)//----------------------------MOUTH functions

            if (mouth == 'closed') {
            wind1X = positions[44][0] + mouthDist/2
            wind1Y = positions[60][1] + lipDist/2

            wind2X = positions[44][0] + mouthDist/2
            wind2Y = positions[60][1] + lipDist/2

            wind3X = positions[44][0] + mouthDist/2
            wind3Y = positions[60][1] + lipDist/2
            }

            if (wind1X >= 800){
                wind1X = positions[44][0] + mouthDist/2
            }

            if (wind1X <= 800 && facing == 'left'){
                wind1X += 10
            }

            if (wind1X >= 0 && facing == 'right'){
                wind1X -= 10
            }

            if (wind1X <= 0){
                wind1X = positions[44][0] + mouthDist/2
            }


            if (wind2X >= 800){
                wind2X = positions[44][0] + mouthDist/2
            }

            if (wind2X <= 800 && facing == 'left'){
                wind2X += 8
            }

            if (wind2X >= 0 && facing == 'right'){
                wind2X -= 8
            }

            if (wind2X <= 0){
                wind2X = positions[44][0] + mouthDist/2
            }


            if (wind3X >= 800){
                wind3X = positions[44][0] + mouthDist/2
            }

            if (wind3X <= 800 && facing == 'left'){
                wind3X += 5
            }

            if (wind3X >= 0 && facing == 'right'){
                wind3X -= 5
            }

            if (wind3X <= 0){
                wind3X = positions[44][0] + mouthDist/2
            }


                fill(0, 0, 0, 0)
                if (mouth == 'open') {
                    
                    arc(wind1X, wind1Y, 40, 60, angle1, angle1+1)
                    arc(wind2X, wind2Y, 41, 59, angle2, angle2+1)
                    arc(wind3X, wind3Y, 42, 58, angle3, angle3+1)
                }


            







        let rightEye1X = positions[24][0]
        let rightEye1Y = positions[24][1]
        let rightEye2X = positions[26][0]
        let rightEye2Y = positions[26][1]
            let rightEyeDistance = dist(rightEye1X, rightEye1Y, rightEye2X, rightEye2Y)
        let leftEye1X = positions[29][0]
        let leftEye1Y = positions[29][1]
        let leftEye2X = positions[31][0]
        let leftEye2Y = positions[31][1]
            let leftEyeDistance = dist(leftEye1X, leftEye1Y, leftEye2X, leftEye2Y)

                if (rightEyeDistance > 40) {
                    eyes = 'laser'
                    print ('pew')
            } else {
                    eyes = 'normal'
            }


            //---------------------------------------------------------------------------------------------face geometry
        push()
        fill(R, G, B, 80)
        ellipse(positions[27][0], positions[27][1], rightEyeDistance, rightEyeDistance) //Right eye
        ellipse(positions[32][0], positions[32][1], leftEyeDistance, leftEyeDistance) //Left eye
        

        beginShape() //face outline
        curveVertex(positions[19][0], positions[19][1])
        curveVertex(positions[0][0], positions[0][1])
        curveVertex(positions[1][0], positions[1][1])
        curveVertex(positions[2][0], positions[2][1])
        curveVertex(positions[3][0], positions[3][1])
        curveVertex(positions[4][0], positions[4][1])
        
        curveVertex(positions[5][0], positions[5][1])
        curveVertex(positions[6][0], positions[6][1])
        curveVertex(positions[7][0], positions[7][1])
        curveVertex(positions[8][0], positions[8][1])
        curveVertex(positions[9][0], positions[9][1])

        curveVertex(positions[10][0], positions[10][1])
        curveVertex(positions[11][0], positions[11][1])
        curveVertex(positions[12][0], positions[12][1])
        curveVertex(positions[13][0], positions[13][1])
        curveVertex(positions[14][0], positions[14][1])

        curveVertex(positions[15][0], positions[15][1])
        curveVertex(positions[16][0], positions[16][1])
        curveVertex(positions[17][0], positions[17][1])
        curveVertex(positions[18][0], positions[18][1])
            curveVertex(positions[22][0], positions[22][1])//2nd eyebrow... for some reason out of order
            curveVertex(positions[21][0], positions[21][1])
            curveVertex(positions[20][0], positions[20][1])
            curveVertex(positions[19][0], positions[19][1])
        curveVertex(positions[19][0], positions[19][1])
        curveVertex(positions[0][0], positions[0][1])
        curveVertex(positions[1][0], positions[1][1])
        endShape()

        beginShape()//lips
        curveVertex(positions[54][0], positions[54][1])
        curveVertex(positions[55][0], positions[55][1])
        curveVertex(positions[44][0], positions[44][1])
        curveVertex(positions[45][0], positions[45][1])
        curveVertex(positions[46][0], positions[46][1])
        curveVertex(positions[47][0], positions[47][1])
        curveVertex(positions[48][0], positions[48][1])
        curveVertex(positions[49][0], positions[49][1])
        curveVertex(positions[50][0], positions[50][1])
        curveVertex(positions[51][0], positions[51][1])
        curveVertex(positions[52][0], positions[52][1])
        curveVertex(positions[53][0], positions[53][1])
        curveVertex(positions[54][0], positions[54][1])
        curveVertex(positions[55][0], positions[55][1])
        curveVertex(positions[44][0], positions[44][1])
        endShape()
            beginShape()// mouth
            curveVertex(positions[61][0], positions[61][1])
            curveVertex(positions[44][0], positions[44][1])
            curveVertex(positions[56][0], positions[56][1])
            curveVertex(positions[57][0], positions[57][1])
            curveVertex(positions[58][0], positions[58][1])
            curveVertex(positions[50][0], positions[50][1])
            curveVertex(positions[59][0], positions[59][1])
            curveVertex(positions[60][0], positions[60][1])
            curveVertex(positions[61][0], positions[61][1])
            curveVertex(positions[44][0], positions[44][1])
            curveVertex(positions[56][0], positions[56][1])
            endShape()


        beginShape() //right eye, weird order
        curveVertex(positions[26][0], positions[26][1])
        curveVertex(positions[66][0], positions[66][1])
        curveVertex(positions[23][0], positions[23][1])
        curveVertex(positions[63][0], positions[63][1])
        curveVertex(positions[24][0], positions[24][1])
        curveVertex(positions[64][0], positions[64][1])
        curveVertex(positions[25][0], positions[25][1])
        curveVertex(positions[65][0], positions[65][1])
        curveVertex(positions[26][0], positions[26][1])
        curveVertex(positions[66][0], positions[66][1])
        curveVertex(positions[23][0], positions[23][1])
        endShape()

        beginShape() //left eye, order all out of whack
        curveVertex(positions[31][0], positions[31][1])
        curveVertex(positions[70][0], positions[70][1])
        curveVertex(positions[28][0], positions[28][1])
        curveVertex(positions[67][0], positions[67][1])
        curveVertex(positions[29][0], positions[29][1])
        curveVertex(positions[68][0], positions[68][1])
        curveVertex(positions[30][0], positions[30][1])
        curveVertex(positions[69][0], positions[69][1])
        curveVertex(positions[31][0], positions[31][1])
        curveVertex(positions[70][0], positions[70][1])
        curveVertex(positions[28][0], positions[28][1])
        endShape()

            if (facing == 'right') { //nose, should face direction that face is at
                beginShape()
                curveVertex(positions[40][0], positions[40][1])
                curveVertex(positions[39][0], positions[39][1])
                curveVertex(positions[38][0], positions[38][1])
                    curveVertex(positions[43][0], positions[43][1])//nostril
                curveVertex(positions[37][0], positions[37][1])
                    curveVertex(positions[42][0], positions[42][1])
                curveVertex(positions[36][0], positions[36][1])
                curveVertex(positions[35][0], positions[35][1])
                curveVertex(positions[34][0], positions[34][1])
                curveVertex(positions[41][0], positions[41][1])
                curveVertex(positions[40][0], positions[40][1])
                endShape()
            }
            if (facing == 'left') {
                beginShape()
                curveVertex(positions[34][0], positions[34][1])
                curveVertex(positions[35][0], positions[35][1])
                curveVertex(positions[36][0], positions[36][1])
                    curveVertex(positions[42][0], positions[42][1])
                curveVertex(positions[37][0], positions[37][1])
                    curveVertex(positions[43][0], positions[43][1])
                curveVertex(positions[38][0], positions[38][1])
                curveVertex(positions[39][0], positions[39][1])
                curveVertex(positions[40][0], positions[40][1])
                curveVertex(positions[41][0], positions[41][1])
                curveVertex(positions[34][0], positions[34][1])
                endShape()
            }

        if (eyes == 'laser' && facing == 'right'){
            strokeWeight(5)
            stroke(255, 0, 0)
            line (positions[27][0], positions[27][1], 0, height)
            line (positions[32][0], positions[32][1], 0, height)
        }

        if (eyes == 'laser' && facing == 'left'){
            strokeWeight(5)
            stroke(255, 0, 0)
            line (positions[27][0], positions[27][1], width, height)
            line (positions[32][0], positions[32][1], width, height)
        }




        pop()
        


        if (health <= 0){
            fill(0)
            rect(0, 0, width, height)
            enemy1X = 600
            enemy2X = 600
            enemy3X = 200
            enemy4X = 200
            mouth = 'closed'
            eyes = 'normal'
            textSize(30)
            fill(255)
            text('GAME OVER', width/2, height/2)
        }

    }


}


function mouseClicked() {                
    print(int(mouseX), int(mouseY))     // display coordinates of mouse click in js console
}