const fruit=["APPLE","guava","mango"];

fruit.filter((f)=>{
    console.log(f)
});

const products=["sugar","rawa","chocklate","sugar"];

// let dot=products.filter((return))
// });

let result=products.filter((item)=>{
    return item==="sugar"
})
console.warn(result)