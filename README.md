# جلسه چهارم جاوا اسکریپت

## تابع Date در جاوا اسکریپت

###### برای گرفتن تاریخ و زمان در لحظه حال می توان از تابع Date جاوا اسکریپت استفاده کرد.

```bash
const dateTime = new Date();
```
###### برای گرفتن تاریخ روز جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getDate());
```
###### برای گرفتن شماره روز هفته جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getDay());
```

###### برای گرفتن سال جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getFullYear());
```

###### برای گرفتن ساعت جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getHours());
```

###### برای گرفتن میلی ثانیه جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getMilliseconds());
```

###### برای گرفتن دقیقه جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getMinutes());
```

###### برای گرفتن ماه جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getMonth());
```

###### برای گرفتن ثانیه جاری می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getSeconds());
```

###### برای گرفتن زمان جاری بر اساس ثانیه می توانید از دستور زیر استفاده کنید.

```bash
const dateTime = new Date();
console.log(dateTime.getTime());
```


###### برای مشاهده مثال های دیگر می توانید فایل DateObjects.html را مشاهده کنید.


## تابع Math در جاوا اسکریپت

###### در جاوا اسکریپت شما می توانید با صدا کردن Math می توانید به مجموعه ای از امکانات دسترسی پیدا کنید که در مثال های زیر به آن ها می پردازیم.

###### مقادیر ثابت در تابع Math

```bash
const numberE = Math.E;
const numberPi = Math.PI;
const numberSqrt2 = Math.SQRT2;
const numberSqrt12 = Math.SQRT1_2;
const numberLn2 = Math.LN2;
const numberLn10 = Math.LN10;
const numberLog2E = Math.LOG2E;
const numberLog10E = Math.LOG10E;
```

###### روند کردن عدد با استفاده از Math، لازم به ذکر است که تابع round اعداد اعشار 0.5 را رو به پایین گرد می کند و باقی را رو به بالا گرد می کند

```bash
let numberUpper5Point = Math.round(4.6);
let numberEqual5Point = Math.round(4.5);
let numberLower5Point = Math.round(4.4);
```

###### تابع ceil اعداد اعشاری را رو به بالا گرد می کند

```bash
let numberRoundToUp = Math.ceil(4.4);
```

###### تابع floor اعداد اعشاری را رو به پایین گرد می کند.

```bash
let numberRoundToDown = Math.floor(4.7);
```

###### تابع trunc اعشار اعداد را حذف کرده و بخش صحیح عدد را بر می گرداند.

```bash
let number = Math.trunc(4.7);
```

###### تابع sign علامت اعداد را از مثبت به منفی و برعکس عوض می کند.

```bash
let changeNumberSign = Math.sign(4);
```

###### تابع pow اعداد را به توان می رساند، پارامتر اول عدد مورد نظر است و پارامتر دوم عدد توان مورد نظر است.

```bash
let power = Math.pow(8,2);
```

###### تابع sqrt جذر عدد مورد نظر شما را بر می گرداند.

```bash
let sqrt = Math.sqrt(64);
```

###### تابع abs عدد مورد نظر شما را مثبت می گرداند.

```bash
let abs = Math.abs(-4.7);
```

###### تابع sin برای شما سینوس زاویه مورد نظر شما را بر می گرداند

```bash
let sin = Math.sin(90 * Math.PI / 180);
```

###### تابع cos کسینوس زاویه مورد نظر شما بر می گرداند.

```bash
let cos = Math.cos(0 * Math.PI / 180);
```

###### تابع min کوچک ترین عدد در مجموعه اعدادی که به آن داده اید را به شما بر می گرداند.

```bash
let min = Math.min(0, 150, 30, 20, -8, -200);
```

###### تابع max بزرگ ترین عدد در مجموعه اعدادی که به آن داده اید را به شما بر می گرداند.

```bash
let max = Math.max(0, 150, 30, 20, -8, -200);
```

###### تابع random یک عدد به صورت تصادفی ما بین 0 تا 1 را می دهد.

```bash
let random = Math.random();
```

###### تابع log2 لگاریتم بر مبناء 2 عدد مورد نظر شما را بر می گرداند.

```bash
let log2 = Math.log2(8);
```

###### تابع log10 لگاریتم بر مبناء 10 عدد مورد نظر شما را بر می گرداند.

```bash
let log10 = Math.log10(1000);
```

###### برای مشاهده مثال های دیگر فایل MathObject.html را مشاهده کنید.

## تابع random در جاوا اسکریپت


###### برای گرفتن عددی تصادفی ما بین 0 الی 1 می توانید تابع random را به صورت زیر صدا کنید.

```bash
let randomNumber = Math.random();
```

###### برای دریافت عدد تصادفی ما بین 0 الی 9 می توان تابع random را به صورت زیر صدا کرد.

```bash
let randomNumber = Math.floor(Math.random() * 10);
```

###### برای دریافت عدد تصادفی ما بین 0 الی 10 می توان تابع random را به صورت زیر صدا کرد.

```bash
let randomNumber = Math.floor(Math.random() * 11);
```

###### برای دریافت عدد تصادفی ما بین 0 الی 99 می توان تابع random را به صورت زیر صدا کرد.

```bash
let randomNumber = Math.floor(Math.random() * 100);
```

###### برای دریافت عدد تصادفی ما بین 0 الی 100 می توان تابع random را به صورت زیر صدا کرد.

```bash
let randomNumber = Math.floor(Math.random() * 101);
```

###### برای دریافت عدد تصادفی ما بین 1 الی 10 می توان تابع random را به صورت زیر صدا کرد.

```bash
let randomNumber = Math.floor(Math.random() * 10) + 1;
```

###### برای دریافت عدد تصادفی ما بین 1 الی 100 می توان تابع random را به صورت زیر صدا کرد.

```bash
let randomNumber = Math.floor(Math.random() * 100) + 1;
```

###### اگر بخواهید عدد تصادفی ما بین اعداد مورد نظر شما دریافت کنید به صورتی که بزرگ ترین عدد را شامل نشود می توانید از دستور زیر استفاده کنید.

```bash
Math.floor(Math.random() * (max - min)) + min;
```

###### اگر بخواهید عدد تصادفی ما بین اعداد مورد نظر شما دریافت کنید به صورتی که بزرگ ترین عدد را شامل شود می توانید از دستور زیر استفاده کنید.

```bash
Math.floor(Math.random() * (max - min + 1) ) + min;
```
###### برای دیدن مثال های بیشتر می توانید به فایل Random.html رجوع کنید.

### بنا به صلاحدید مدرس، می توان تمرین دوم در کلاس یا خانه حل شود.