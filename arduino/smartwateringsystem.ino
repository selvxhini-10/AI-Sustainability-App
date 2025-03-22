/* Plant watering system - Serial Monitor Version */

#include <ESP8266WiFi.h>

//component pins 
#define sensor A0
#define waterPump D3

//thresholds
#define DRY_THRESHOLD 40  // turns pump off between these 2 values
#define WET_THRESHOLD 60  

void setup() {
  Serial.begin(9600);
  pinMode(waterPump, OUTPUT);
  digitalWrite(waterPump, HIGH); 

  Serial.println("System Loading...");
  for (int a = 0; a <= 15; a++) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\nSystem Ready");
}

// Function to get soil moisture and control the pump
void soilMoistureSensor() {
  int value = analogRead(sensor);
  value = map(value, 0, 1024, 0, 100);
  value = (value - 100) * -1; 

  Serial.print("Moisture Level: ");
  Serial.print(value);
  Serial.println("%");

  // Control the water pump based on moisture level
  if (value < DRY_THRESHOLD) {
    digitalWrite(waterPump, LOW); 
    Serial.println("Pump ON: Watering the plant...");
  } 
  else if (value > WET_THRESHOLD) {
    digitalWrite(waterPump, HIGH); 
    Serial.println("Pump OFF: Soil is moist enough.");
  }

  delay(2000); 
}

void loop() {
  soilMoistureSensor();
}
