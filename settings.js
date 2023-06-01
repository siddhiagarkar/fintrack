// localStorage.clear();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
//expense table
const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector('.calendar');
  const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var p=0; var q=0;
  let month_picker = document.querySelector('#month-picker');
  const dayTextFormate = document.querySelector('.day-text-formate');
  const timeFormate = document.querySelector('.time-formate');
  const dateFormate = document.querySelector('.date-formate');
  let calendar_limit = document.querySelector('.calendar-limit');
  month_picker.onclick = () => {
    var rect = dayTextFormate.getBoundingClientRect();
  if (
    p===0
    // rect.top >= 0 &&
    // rect.left >= 0 &&
    // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // dayTextFormate.classList.contains('showtime')
  ) {
    
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
  } 
  };
  var m = JSON.parse(localStorage.getItem("m") || "[]");
  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    
    let currentDate = new Date();
    
    month_picker.innerHTML = month_names[month];
    
    calendar_header_year.innerHTML = year;
    
    let first_day = new Date(year, month);
    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {

      let day = document.createElement('button');
      day.style.border="none";
      let s1=String(i).concat(".");
      let s2=String(month+1).concat(".");
      let s3=String(year);
      let str=s1.concat(s2);
      let fstr=str.concat(s3);
      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
          m.forEach(j => {
            if(j.datee === fstr){
              if(year >= currentDate.getFullYear()){
                if(month>currentDate.getMonth()||(month===currentDate.getMonth() && day.textContent>=currentDate.getDate())){
                  var circle = document.createElement('div');
                  circle.classList.add('notif');
                  day.appendChild(circle);
                }}
            }
          });
      }
      var count=0;
      day.addEventListener("click", function(){
        if(year >= currentDate.getFullYear()){
          if(month>currentDate.getMonth()||(month===currentDate.getMonth() && day.textContent>=currentDate.getDate())){
            let s1=String(i).concat(".");
            let s2=String(month+1).concat(".");
            let s3=String(year);
            let str=s1.concat(s2);
            let fstr=str.concat(s3);
              var flag=0;
              var j;
              m.some(j => {
                if(j.datee === fstr){
                  count++;
                  p++;q++;
                  if(count>1)
                  {
                    // alert("please click on go back if this is not the date you want to set a limit for");
                    return;
                  }
                  // head.scrollIntoView({ behavior: 'smooth' });
                  let head = document.getElementById("heading");
                  head.scrollIntoView({ behavior: 'smooth' });
                  head.innerHTML=`Your Expense Limit is ${j.amount}`;
                  flag++;
                  var ok=document.createElement('button');
                  ok.textContent="Press OK to continue";
                  var br = document.createElement("br");
                  head.appendChild(br.cloneNode());
                  head.appendChild(ok);
                  dayTextFormate.classList.remove('showtime');
                  dayTextFormate.classList.add('hidetime');
                  timeFormate.classList.remove('showtime');
                  timeFormate.classList.add('hideTime');
                  dateFormate.classList.remove('showtime');
                  dateFormate.classList.add('hideTime');
                  ok.addEventListener('click',function(){
                    location.reload();
                  });
                }
              })
            if(flag===0){
              count++;p++;q++;
              if(count>1)
              {
                // alert("please click on go back if this is not the date you want to set a limit for");
                return;
              }
              let head = document.getElementById("heading");
              calendar_limit.scrollIntoView({ behavior: 'smooth' });
              head.innerHTML=`Set Your Expense Limit for ${day.textContent}/${month+1}/${year} `;
              let f=document.createElement('form');
              var fn = document.createElement("input");
              fn.setAttribute("input", "value");
              fn.setAttribute("placeholder", "Amount");
              let s = document.createElement('button');
              s.textContent="Submit";
              let gb = document.createElement('button');
              gb.textContent="Go Back";
              var br = document.createElement("br");
              f.appendChild(head);
              f.appendChild(br.cloneNode());
              f.appendChild(fn);
              f.appendChild(br.cloneNode());
              f.appendChild(s);
              f.appendChild(br.cloneNode());
              f.appendChild(gb);
              f.appendChild(br.cloneNode());
              calendar_limit.appendChild(f);
              calendar_limit.classList.remove('hideonce');
              calendar_limit.classList.remove('hide');
              calendar_limit.classList.add('show');
              dayTextFormate.classList.remove('showtime');
              dayTextFormate.classList.add('hidetime');
              timeFormate.classList.remove('showtime');
              timeFormate.classList.add('hideTime');
              dateFormate.classList.remove('showtime');
              dateFormate.classList.add('hideTime');
              s.addEventListener('click', function() {
              if (confirm("Confirm Save?")) 
              {
                const am = Number(fn.value);
                if (isNaN(am) || am <=0 ) {
                  alert('Please enter a valid amount')
                  return;
                }
                m.push({
                  datee:fstr,
                  amount:am});
                calendar_limit.classList.replace('show', 'hide');
                dayTextFormate.classList.remove('hideTime');
                dayTextFormate.classList.add('showtime');
                timeFormate.classList.remove('hideTime');
                timeFormate.classList.add('showtime');
                dateFormate.classList.remove('hideTime');
                dateFormate.classList.add('showtime');
                calendar_limit.classList.add('hideonce');
                localStorage.setItem("m", JSON.stringify(m));
              } 
              else {
                txt = "You pressed Cancel!";
              }
              });
              gb.addEventListener('click',function(){
                return;
              });
            }
            // calendar_limit.removeChild(f);
          }  
        }
      });
      calendar_days.appendChild(day);
    }
  };
  
  let month_list = calendar.querySelector('.month-list');
  month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    month_list.append(month);
    month.onclick = () => {
      // if(count<0){
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
      // }
    };
  });
  
  (function () {
    month_list.classList.add('hideonce');
  })();

  document.querySelector('#pre-year').onclick = () => {
    var rect = dateFormate.getBoundingClientRect();
    if (
      q===0
      // rect.top >= 0 &&
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      // dayTextFormate.classList.contains('showtime')
    ) {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  }
  };
  document.querySelector('#next-year').onclick = () => {
    // var rect = dateFormate.getBoundingClientRect();
    if (
      q===0
      // f.style.display==="none"
      // rect.top >= 0 &&
      // rect.left >= 0 &&
      // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      // dayTextFormate.classList.contains('showtime')
    ) {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  }
  };
  
  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector('.time-formate');
  const todayShowDate = document.querySelector('.date-formate');
  
  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);



  //sticky navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}