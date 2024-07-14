addIngredient("ethylbenzene",{
    type:"liquid",
    color:"#ccc9c2",
  
});

addIngredient("coal_tar",{
    type:"paste",
    color:"#2b2929",
    shape:"blob_pile",
    boilPoint:200,
    boilInto:["ethylbenzene"]
    
});

addIngredient("styrene",{
    type:"liquid",
    color:"#d1cdc5",
    boilPoint:200
    boilInto:["styrofoam"]
    
});


addIngredient("potassium",{
    type:"liquid",
    color:"#9c8a67",
    reactions: {
        ethylbenzene: { set1:"styrene", tempMin:276 }
    }
    
});

editIngredient("mashed_banana",{
    boilPoint:160,
    boilInto:["potassium"],
  
});
