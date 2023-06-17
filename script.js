const btntog = document.getElementById('btntoggle');
const togg = document.getElementById('toggle');
const basic = document.getElementById('learnbasic');
const professional = document.getElementById('learnprof');
const master = document.getElementById('learnmaster');
const pricebasic = document.getElementById('pricebasic')
const priceprof = document.getElementById('priceprof')
const pricemaster = document.getElementById('pricemaster')


flag = true

btntog.addEventListener('click', ()=>{
    toggle()
})

const toggle = ()=>{
    btntog.className = flag ? "w-12 h-8 bg-indigo-500 rounded-3xl relative " : "w-12 h-8 bg-indigo-500 rounded-3xl relative "
    togg.className = flag ? "bg-white w-6 h-6 my-1 rounded-full absolute top-0" : "bg-white w-6 h-6 my-1 rounded-full absolute top-0 right-1"
    basic.className = flag ? " bg-indigo-400 rounded-lg py-1 px-20 my-4 text-lg text-white hover:bg-white hover:text-indigo-400 hover:outline ouline-indigo-400" : " bg-indigo-400 rounded-lg py-1 px-20 my-4 text-lg text-white hover:bg-white hover:text-indigo-400 hover:outline ouline-indigo-400"
    professional.className = flag ? "bg-white text-black rounded-lg py-1 px-20 my-4 text-lg hover:bg-indigo-400 hover:text-white hover:outline ouline-white" : "bg-white text-black rounded-lg py-1 px-20 my-4 text-lg hover:bg-indigo-400 hover:text-white hover:outline ouline-white"
    master.classname = flag ?" bg-indigo-400 rounded-lg py-1 px-20 my-4 text-lg text-white hover:bg-white hover:text-indigo-400 hover:outline ouline-indigo-400" : " bg-indigo-400 rounded-lg py-1 px-20 my-4 text-lg text-white hover:bg-white hover:text-indigo-400 hover:outline ouline-indigo-400"

    pricebasic.innerHTML = flag ? "199.99" : "19.99"
    priceprof.innerHTML = flag ? "249.99" : "24.99"
    pricemaster.innerHTML = flag ? "399.99": "39.99"

    flag = !flag
}