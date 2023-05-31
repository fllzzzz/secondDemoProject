//get dom
var 
//querySelector	
	formInputSearchDom = document.getElementById('formInputSearch');
	dataTableDom = document.getElementById('dataTable');


//  inputCallback (formInputSearchDom)
async function inputOpt(inputValue){
	const jsonData =(await (await fetch("./countries.json")).json()).RECORDS;
	// filter arr
	var matchArr = jsonData.filter( jsonData =>{
		const regex = new RegExp("^"+ inputValue,'gi');
		return jsonData.name.match(regex);
	})
	// HTML init
	if (inputValue.length === 0 ){
		matchArr = [];
		while(true){
			if(dataTableDom.children.length === 0 ){
				break;
			}
			dataTableDom.removeChild(dataTableDom.children[0])
		}
	}

	// showData in HTML
	if( matchArr.length > 0 ){
		const inlineHTML = matchArr.map( 
			matchArr =>
				`<div id="dataTableDom-div" class="card card-body mt-3 mb-1">
					<h4 id="dataTableDom-h4">
						${matchArr.name}
						<span id="dataTableDom-span" class="text-primary">
							${matchArr.cname}
						</span>
					</h4>
					<small id="dataTableDom-small">
						${matchArr.remark}
					</small>
				</div>`
		).join("");
		dataTableDom.innerHTML = inlineHTML;
	}
}

// inputListener
formInputSearchDom.addEventListener('input', () => inputOpt(formInputSearchDom.value));