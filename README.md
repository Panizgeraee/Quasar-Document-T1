# جلسه دوم جاوا اسکریپت

## آموزش متغیر ها در جاوا اسکریپت

```bash
test = 123;
```

```bash
var test = 123;
```

```bash
let test = 123;
```

```bash
const test = 123;
```

```bash
_1000 = "test";
```

```bash
$1000 = "test";
```

###### برای دیدن مثال ها بیشتر، فایل Variables.html مشاهده کنید

## انواع داده ها در جاوا اسکریپت

#### number
```bash
test = 123;
```

#### string
```bash
test = "hossein";
```

#### undefined
```bash
test ;
```

#### object
```bash
user = {
    first_name: "hossein",
    last_name: "pourghadiri"
};
```

#### array
```bash
test = ['one','two','three'];
```
###### آرایه در جاوا اسکریپت نیز یک object شناخته می شود

#### boolean
```bash
test = true;
```
###### برای مشاهده انواع داده ها می توانید فایل DataTypes.html را مشاهده کنید

## شی یا Object در جاوا اسکریپت

```bash
user = {
    first_name: 'hossein',
    last_name: 'pourghadiri',
    age: 20,
    gender: "male",
};
```

###### شی یا object  در جاوا اسکریپت نوع داده ای است که می توان توسط آن داده ها را با کلید گذاری های اختصاصی خود ذخیره نمود. به عبارتی معادل دیکشنری پایتون محسوب می شود. برای دیدن مثال های بیشتر به فایل Objects.html رجوع کنید.

## تابع یا function در جاوا اسکریپت

```bash
function name(parameter1, parameter2){
    return parameter1 * parameter2;
}

name(10, 20);
```
###### تایع در جاوا اسکریپت مثل دیگر زبان ها از واژه ای به عنوان function برای معرفی یا ساخت یک تابع استفاده می شود و بعد آن نام تایع به صورت camel case یا snake case یا pascal case نوشته می شود و سپس scope آن تابع باز می شود و  فرآیند مورد نظر در آن نوشته می شود
###### برای مشاهده مثال ها دیگر به فایل Functions.html رجوع کنید.

### متناسب با توان کلاس و صلاحدید مدرس، تمرین ۱ در کلاس یا در منزل پیاده سازی شود. لازم به ذکر است که شرط ها و تایع eval در تمرین تدریس نشده است