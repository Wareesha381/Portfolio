document.addEventListener("DOMContentLoaded", () => {
const typedSpan = document.querySelector("#typed-text");

  ityped.init(typedSpan, {
    showCursor: true,
    cursorChar: "|",            
    strings: [
      "Front-End Developer",
      "Designer",
      "Freelancer"
    ],
    typeSpeed: 100,             
    backSpeed: 50,              
    loop: true                  
  });

  document.getElementById("download-CV").addEventListener("click", ()=>{
    const link = document.createElement("a");
    link.href = '/images/Wareesha-Rehman.pdf';
    link.download = 'Wareesha-Rehman.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  const allBars= document.querySelectorAll('[data-width]');
  allBars.forEach(bar=>{
  const barWidth=bar.getAttribute('data-width');    
  bar.style.width=barWidth;
  });

  document.getElementById("weather-project").addEventListener("click", ()=>{
  const applink=document.createElement("a");
  applink.href='https://climate-spotlight.netlify.app/ ';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
  });

document.getElementById("todo-project").addEventListener("click", ()=>{
  const applink=document.createElement("a");
  applink.href='https://daily-planner-js.netlify.app/';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
  });

  document.getElementById("attendance-project").addEventListener("click", ()=>{
  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/student-attendance-system.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
  });

  document.getElementById("grocery-project").addEventListener("click", ()=>{
  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/grocery-shop-management.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
  });

  document.getElementById("ecommerce-project").addEventListener("click", ()=>{
  const applink=document.createElement("a");
  applink.href='https://shoploop.netlify.app/';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
  });


  const menuBtn = document.getElementById("menu-btn");
      const menu = document.getElementById("menu");
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });

      const backToTop = document.getElementById("backToTop");
      backToTop.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );

      document.getElementById("send-sp").addEventListener("click", () => {
  setTimeout(() => {
    document.getElementById("name-sp").value = "";
    document.getElementById("email-sp").value = "";
    document.getElementById("message-ap").value = "";
  }, 1000); 
});

document.getElementById("weather-checker-btn").addEventListener("click", ()=>{

  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/weather-checker.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);

});

document.getElementById("to-do-view-btn").addEventListener("click", ()=>{


  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/dark-mode-todo-list.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
});

document.getElementById("ecom-view-btn").addEventListener("click", ()=>{


  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/E-Commerce.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
});

document.getElementById("attendance-view-btn").addEventListener("click", ()=>{


  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/student-attendance-system.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
});

document.getElementById("grocerry-view-btn").addEventListener("click", ()=>{


  const applink=document.createElement("a");
  applink.href='https://github.com/Wareesha381/grocery-shop-management.git';
  applink.target='_blank';
  document.body.appendChild(applink);
  applink.click();
  document.body.removeChild(applink);
});
});
