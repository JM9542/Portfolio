const ls=[...document.querySelectorAll('.links a')],ids=ls.map(a=>document.querySelector(a.getAttribute('href')));
addEventListener('scroll',()=>{let b=0,top=-1e9;ids.forEach((s,n)=>{const t=s.getBoundingClientRect().top;if(t<200&&t>top){top=t;b=n}});ls.forEach((a,n)=>a.classList.toggle('on',n===b))},{passive:true});
