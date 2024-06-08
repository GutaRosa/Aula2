let purchaseList = ['apple', 'banana', 'orange']
let myName = 'Maria'
const purchase = true
if (purchase == true)   
    {console.log ('Purchase made!')
    console.log (`Thank you very much for the purchase ${myName}`)

    console.log (`You bought: ${purchaseList [0]}, ${purchaseList [1]} and ${purchaseList [2]}`)
    if (purchaseList.length>2){('You purchase more than two itens')
        console.log ('With our special offer of the day, get a watermalon for free')
    }
    else{console.log ('Today unfortunately you not win a offer')
        console.log ('Purchase not made!')
    }

}