# جلسه سوم جاوا اسکریپت

## رخداد ها یا event در جاوا اسکریپت

```bash
change: An HTML element has been changed
click: The user clicks an HTML element
mouseover: The user moves the mouse over an HTML element
mouseout: The user moves the mouse away from an HTML element
keydown: The user pushes a keyboard key
load: The browser has finished loading the page
```

###### هر یک از رفتار های کاربر در مرورگر تحت عنوان رخداد یا event نام برده می شود که تعداد اندکی از این رخداد ها را در بالا نمایش دادم.
###### برای نمایش آن ها در HTML و JS متفاوت است

### HTML
```bash
<button onclick="console.log('14:00:00')">The time is?</button>
```
### JS
```bash
button.addEventListener('click',function(){
    console.log('14:00:00');
});
```

## اعداد در جاوا اسکریپت

###### در جاوا اسکریپت اعداد می تواند صحیح باشد یا اعشاری و هر دو number  محسوب می شود

```bash
number = 123;
```
```bash
number = 123.321;
```
###### اعداد بسیار بزرگ و کوچک در جاوا اسکریپت هم number محسوب می شود

```bash
number = 123e5;
```

```bash
number = 123e-5;
```

###### بیشترین حد اعدادی که می توان به عنوان اعداد صحیح دریافت کرد 15 رقم است

```bash
number = 999999999999999;
```
###### در جاوا اسکریپت عملگر + به معنای متصل کردن یا به عبارتی کنار هم قرار دادن است و وقتی برای جمع اعداد استفاده می شود، همیشه یکسان نخواهد شد.

```bash
sum_not_0.3 = 0.2 + 0.1
```
###### جمع دو عدد در جاوا اسکریپت خروجی عدد خواهد داد و به یک عدد جدید تبدیل خواهد شد به عنوان مثال عدد 10 با 20 جمع شود به عدد 30 خواهد رسید

```bash
let x = 10;
let y = 20;
let z = x + y;
```
###### جمع دو عدد در جاوا اسکریپت از نوع رشته (string) سبب خروجی رشته جدید که ترکیب شده دو مقدار قبلی خواهد بود بع عنوان مثال جمع دو رشته 10 و 20 به خروجی 1020 خواهد رسید.

```bash
let x = "10";
let y = "20";
let z = x + y;
```

###### جمع یک عدد و یک رشته و بر عکس آن سبب تولید یک رشته جدید خواهد کرد، به عنوان مثال اگر 10 عدد را با 20 رشته جمع کنید به عدد 1020 خواهید رسید.

```bash
let x = 10;
let y = "20";
let z = x + y;
```
###### در دیگر عملگر ها، جاوا اسکریپت به درستی عمل می کند خواه عدد باشد با به شکل رشته.

```bash
let x = "100";
let y = "10";
let z = x * y;
```

```bash
let x = "100";
let y = "10";
let z = x - y;
```

```bash
let x = "100";
let y = "10";
let z = x / y;
```

###### تقسیم عدد بر یک متغیر رشته سبب خروجی غیر عدد می شود که به آن Not a Number یا همان NaN می گویند

```bash
let x = 100;
let y = "َApple";
let z = x / y;
```

###### تقسیم اعداد بر صفر در جاوا اسکریپت تولید بینهایت یا infinity می کند.

```bash
let x = 2/0;
let y = -2/0;
```
###### برای دیدن مثال های بیشتر می توانید فایل Numbers.html مشاهده کنید.

## آرایه ها در جاوا اسکریپت

###### در جاوا اسکریپت می توان آرایه را در یک خط یه چند خط نوشت.

```bash
const cars = ["Saab", "Volvo", "BMW"];
```
```bash
const cars = [
    "Saab",
    "Volvo",
    "BMW"
];
```

###### در جاوا اسکریپت می توان یک آرایه را خالی تعریف کرد و سپس در اندیس های مورد نظر مقدار دهی کرد.

```bash
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
```

###### برای ساخت یک آرایه می توان از object آرایه نیز استفاده کرد

```bash
const cars = new Array("Saab", "Volvo", "BMW");
```

###### برای دسترسی به مقدار های داخل آرایه از اندیس در کروشه استفاده می کنیم.

```bash
const cars = ["Saab", "Volvo", "BMW"];
let newValue = cars[0];
cars[1] = "Benz";
```
###### با length می توان به طول آرایه رسید.

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let arrayLen = fruits.length
```

###### برای دسترسی به آخرین آیتم یک آرایه می توان یکی کمتر از length را فراخوانی نمود.

```bash
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newValue = fruits[fruits.length -1]
```
###### برای افزودن به آرایه در جاوا اسکریپت می توان از دو رشو زیر استفاده نمود.

```bash
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
```
###### یا
```bash
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";
```
###### در جاوا اسکریپت می توان آرایه را با اندیس رشته یا به عبارتی کاراکتر تعریف نمود.

```bash
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
```
###### برای دیدن مثال های بیشتر می توانید فایل Arrays.html مشاهده کنید.


