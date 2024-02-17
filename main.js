 //  when we click on picture1 , its price will show in Cart Subtotal and if you click twice or more, every prices will be totaled and show in Cart Subtotal section 
    // this program repeat  and do in all photos
    document.querySelector("#item1").onclick = function () {
        // total is a STR
        let total = document.querySelector("#subtotal").textContent;
        // total change to INT
        total = parseInt(total);
        // at first the price of total is 0 but after click prices will be totaled.
        total += 300;
        document.querySelector("#subtotal").textContent = total;
    }

    document.querySelector("#item2").onclick = function () {
        let total = document.querySelector("#subtotal").textContent;
        total = parseInt(total);
        total += 180;
        document.querySelector("#subtotal").textContent = total;
    }
    document.querySelector("#item3").onclick = function () {
        let total = document.querySelector("#subtotal").textContent;
        total = parseInt(total);
        total += 200;
        document.querySelector("#subtotal").textContent = total;

    }