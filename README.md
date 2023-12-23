# جلسه پنجم جاوا اسکریپت

## شرط if و else if و else در جاوا اسکریپت

###### در جاوا اسکریپت برای شرط بجز else باید از پرانتز استفاده شود و شرط داخل آن نوشته شود و در صورت برقراری شرط کد موجود در آن اجرا خواهد شد و برای مشخص شدن scope از آکولاد استفاده می کنیم.

```bash
let number = 100;
if (number < 10) {
    console.log('number smaller than 10');
} else if (number < 20) {
    console.log('number smaller than 20');
} else {
    console.log('number greater than 20');
}
```

###### زمانی که تعداد دستورات برای یک شرط فقط یکی است، می توان از آکولاد استفاده نکرد.

```bash
let number = 100;
if (number < 10)
    console.log('number smaller than 10');
else if (number < 20)
    console.log('number smaller than 20');
else
    console.log('number greater than 20');
```

###### برای دیدن مثال بیشتر فایل ifElseAndElseIf.html را مشاهده کنید.

## مبحث switch در جاوا اسکریپت

###### در پرانتز switch داده مورد نظر خود را می دهیم، اگر داده ورودی با یکی از حالت های ما یعنی مقدار case برابر بود، آن case اجرا خواهد شد. دقت کنید که case های ما می تواند یک عدد یا رشته یا عملکر های منطقی مانند کوچکتر و بزرگتر و ... باشد. باید دقت داشت که انتهای هر case باید break قرار گیرد، در غیر این صورت پس از اتمام کد وارد case زیرین می شود و تا جایی پیش می رود تا به یک دستور break برسد. در switch ما حالت تحت عنوان default نیز داریم که اگر نوشته شود، در صورت اجراء نشدن هیچ یک از case ها، آن نیز اجرا می شود.

```bash
let day1;
switch (new Date().getDay()) {
    case 0:
        day1 = "Sunday";
        break;
    case 1:
        day1 = "Monday";
        break;
    case 2:
        day1 = "Tuesday";
        break;
    case 3:
        day1 = "Wednesday";
        break;
    case 4:
        day1 = "Thursday";
        break;
    case 5:
        day1 = "Friday";
        break;
    case 6:
        day1 = "Saturday";
        break;
    default :
        day1 = "Error";
        break;    
}
```
###### برای دیدن و اجراء مثال های دیگر، فایل SwitchStatement.html را مشاهده کنید.


### بنا به صلاحدید مدرس، می توان تمرین سوم در کلاس یا خانه حل شود.
