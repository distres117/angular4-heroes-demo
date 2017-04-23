export const stagger = (container:any[], items:any[], delay:number)=>{
    let i = 0;
    let interval = setInterval(()=>{
        container.push(items[i++]);
        if (i === items.length)
            clearInterval(interval);
    }, delay);
}