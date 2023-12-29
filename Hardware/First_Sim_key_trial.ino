
#include <Keypad.h>
#include <LiquidCrystal_I2C.h>
 
#define ROWS  4
#define COLS  4
 
char keyMap[ROWS][COLS] = {
  {'1','2','3', 'A'},
  {'4','5','6', 'B'},
  {'7','8','9', 'C'},
  {'*','0','#', 'D'}
};
 
uint8_t rowPins[ROWS] = {14,27,26,25}; 
uint8_t colPins[COLS] = {33,32,18,19}; 
uint8_t LCD_CursorPosition = 0;
String P1 = "111";
String P2 = "222";
String P3 = "333";

String cc="Chetan";
String tt="Tayyab";
String vv="Vaishnavi";
String InputStr = "";
 
Keypad keypad = Keypad(makeKeymap(keyMap), rowPins, colPins, ROWS, COLS );
LiquidCrystal_I2C I2C_LCD(0x27, 16, 2);  
 
void setup(){
  // Serial.begin(115200);
  I2C_LCD.init();
  I2C_LCD.backlight();
  I2C_LCD.clear();
  I2C_LCD.setCursor(0, 0);
  I2C_LCD.print("Welcome to");
  I2C_LCD.setCursor(0, 1);
  I2C_LCD.print("FitSense");
  delay(3000);
  I2C_LCD.clear();
  I2C_LCD.setCursor(0, 0);
  I2C_LCD.print("Enter User Id:");
}
 
void loop(){
  
  char key = keypad.getKey();
  
  if (key) {
    InputStr += key;
    I2C_LCD.setCursor(LCD_CursorPosition++, 1);
    if(LCD_CursorPosition == 3)
    {
      String message;
      String message2;
      if(InputStr == P1) {
        message2 = "Access Granted!";
        message= cc;

      }
      else if(InputStr == P2) {
        message2 = "Access Granted!";
        message= tt;
      }
      else if(InputStr == P3) {
        message2 = "Access Granted!";
        message= vv;
      }
      else {
        message2 = "Wrong ID!";
        message ="Contact admin";
      }
      InputStr = "";
      I2C_LCD.clear();
      LCD_CursorPosition = 0;
      I2C_LCD.print(message2);
      I2C_LCD.setCursor(0,1);
      I2C_LCD.print(message);
    }
    else if(key == 'D')
    {
      InputStr = "";
      I2C_LCD.clear();
      LCD_CursorPosition = 0;
      I2C_LCD.print("Enter User Id:");
    }
    else
    {
      I2C_LCD.print(key);
    }
  }
}