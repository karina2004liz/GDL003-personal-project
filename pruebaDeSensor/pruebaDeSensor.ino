

int valor, npin;
float temp;


void setup() {
valor = 0;
temp = 0.0;


for(npin=3; npin<=8; npin++){

  pinMode(npin,OUTPUT);
  }
 
}

void loop() {
  valor = analogRead(A1);
  temp = (500.0 * valor)/1024.0;

if(temp < 27){
  
  digitalWrite(8,HIGH);
  digitalWrite(7,HIGH);
  digitalWrite(6,LOW);
  digitalWrite(5,LOW);
  digitalWrite(4,LOW);
  digitalWrite(3,LOW);
  }

if(temp>=27 && temp<30){

  digitalWrite(8,LOW);
  digitalWrite(7,LOW);
  digitalWrite(6,HIGH);
  digitalWrite(5,HIGH);
  digitalWrite(4,LOW);
  digitalWrite(3,LOW);

  }

if(temp>30){
  
  digitalWrite(8,LOW);
  digitalWrite(7,LOW);
  digitalWrite(6,LOW);
  digitalWrite(5,LOW);
  digitalWrite(4,HIGH);
  digitalWrite(3,HIGH);
  
  }
 
}
  
