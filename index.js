// Write your code here!



window.addEventListener('load', function () {
    const body = document.body;
    const main = document.querySelector("main#main");
    let newHeader = document.createElement('h1');
    
    main.remove();

    newHeader.setAttribute('id', 'victory');
    newHeader.innerText= "NILS is the champion";

    body.appendChild(newHeader);

  });


    
