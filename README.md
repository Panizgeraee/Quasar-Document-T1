# جلسه اول جاوا اسکریپت

## آموزش اصول نگارشی جاوا اسکریپت

```bash
x, y, z;  
x = 5;     
y = 6;       
z = x + y;
```
###### معرفی اصول نگارشی جاوا اسکریپت و استفاده از فایل Statements.html جهت معرفی مثال ها بیشتر



## آموزش کامنت گذاری در جاوا اسکریپت

```bash
/*
document.getElementById("myH1").innerHTML = "Welcome to my Homepage";
*/
```
```bash
//document.getElementById("myH2").innerHTML = "My First Page";
```
###### دو روش مرسوم در نحوه کامنت گذاری در جاوا اسکریپت، جهت دیدن مثال های بیشتر به فایل Comments.html رجوع کنید

## آموزش انواع اجراء جاوا اسکریپت
### روش اول: داخلی (Internal)
###### نوشتن کد ها جاوا اسکریپت در داخل HTML
```bash
<script>
document.getElementById("JavaScript In Head").innerHTML =
"Paragraph changed: JavaScript In Head!!!";
</script>
```
### روش دوم: خارجی (External)
###### نوشتن کد های جاوا اسکریپت در یک فایل js و اجراء آن در HTML
```bash
document.getElementById("External JavaScript").innerHTML =
"Paragraph changed: External JavaScript!!!";
```
```bash
<script src="WhereTo.js"></script>
```

###### برای دیدن نمونه های بیشتر به فایل WhereTo.html و WhereTo.js را مشاهده کنید

## آموزش انواع خروجی گرفتن در جاوا اسکریپت

```bash
document.getElementById("outputWithInnerHTML").innerHTML = 5 + 6;
```

```bash
document.write(5 + 6);
```

```bash
window.alert(7 + 6);
```

```bash
alert(8 + 7);
```

```bash
console.log(10 + 11);
```

```bash
window.print();
```


###### برای دیدن اجراء نمونه کد های بالا می توانید فایل Output.html و Output.js مشاهده کنید