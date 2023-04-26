canvas = document.getElementById('myCanvas'); // obter a referência do canvas e colocar na variável
ctx = canvas.getContext("2d"); //o conteúdo de  canvas será armazenado na  váriavel ctx

nasaMarsImagesArray = ["nasa_image_1.jpg","nasa_image_2.jpeg","nasa_image_3.jpg","nasa_image_4.jpg"];

randomNumber = Math.floor(Math.random() * 4);

console.log(randomNumber);

roverWidth = 100;  //largura do Rover
roverHeight = 90;   //altura do Rover

backgroundImage = nasaMarsImagesArray[randomNumber];
console.log("backgroundImage = " + backgroundImage);
roverImage = "rover.png";
 
roverX = 10; //coordenada X inicial
roverY = 10; //coordenada Y inicial

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, onloading essa variável
	roverImgTag.src = roverImage;   // carregue a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height); // Sintaxe: ctx.drawImage(img,x,y,width,height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;   //obterá o valor da tecla pressionada na  variável keyPressed
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}

		//Atividade Adicional
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		//Fim da Atividade Adicional
}
//Coberto na C85. 
function up()
{
	if(roverY >=0)
	{
		roverY = roverY - 10;
		console.log("Quando a seta para cima for pressionada,  x = " + roverX + " | y = " +roverY);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(roverY <=500)
	{
		roverY =roverY+ 10;
		console.log("Quando a seta para baixo for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverX >= 0)
	{
		roverX =roverX - 10;
		console.log("Quando a seta para esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(roverX <= 700)
	{
		roverX =roverX + 10;
		console.log("Quando a seta para direita for pressionada,  x = " + roverX + " | y = " +roverY);
		uploadBackground();
		uploadrover();
   }
}