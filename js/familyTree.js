//read photo infotmation
function readUrl(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;//image:base64
      let imgName = input.files[0].name;
      let labelId = input.id + `_label`;
      let base64Id = input.id + `_64`;
      $(`#` + labelId).text(imgName);
      $(`#` + base64Id).val(imgData);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

//add inputs for parent
function addParent() {
	var parentNum = getLastNum(`parentNum`);
	if(Number(parentNum) == 4) {
		alert(`max`);
		return;
	}
	var nextParentNum = Number(parentNum) + 1;
	var html;
	if(nextParentNum == 1) {
		html = `
		<div id="p${nextParentNum}" class="col-xs-12 col-sm-8 col-md-6">
			<div class="form-check form-check-inline">
				<input id="pGender${nextParentNum}m" name="pGender${nextParentNum}" class="form-check-input" type="radio" value="m" checked>
				<label class="form-check-label" for="pGender${nextParentNum}m">Male</label>
			</div>
			<div class="form-check form-check-inline">
				<input id="pGender${nextParentNum}f" name="pGender${nextParentNum}" class="form-check-input" type="radio" value="f">
				<label class="form-check-label" for="pGender${nextParentNum}f">Female</label>
			</div>
		</div>
		<div id="pp${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text parentNum">${nextParentNum + '.'}</span>
				</div>
			  	<input id="parentName${nextParentNum}" type="text" class="form-control" placeholder="What's your parent's name?">
		  	</div>
		</div>
		<div id="ppp${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="parentPhoto${nextParentNum}" type="file" accept="image/*" class="custom-file-input" onchange="readUrl(this)">
					<input id="parentPhoto${nextParentNum}_64" tyle="hidden">
					<label id="parentPhoto${nextParentNum}_label" class="custom-file-label" for="parentPhoto${nextParentNum}">Choose file</label>
				</div>
		   	</div>
		</div>`;
	} else {
		html = `
		<div id="p${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="form-check form-check-inline">
				<input id="pGender${nextParentNum}m" name="pGender${nextParentNum}" class="form-check-input" type="radio" value="m" checked>
				<label class="form-check-label" for="pGender${nextParentNum}m">Male</label>
			</div>
			<div class="form-check form-check-inline">
				<input id="pGender${nextParentNum}f" name="pGender${nextParentNum}" class="form-check-input" type="radio" value="f">
				<label class="form-check-label" for="pGender${nextParentNum}f">Female</label>
			</div>
		</div>
		<div id="pp${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text parentNum">${nextParentNum + '.'}</span>
				</div>
			  	<input id="parentName${nextParentNum}" type="text" class="form-control" placeholder="What's your parent's name?">
		  	</div>
		</div>
		<div id="ppp${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="parentPhoto${nextParentNum}" type="file" accept="image/*" class="custom-file-input" onchange="readUrl(this)">
					<input id="parentPhoto${nextParentNum}_64" tyle="hidden">
					<label id="parentPhoto${nextParentNum}_label" class="custom-file-label" for="parentPhoto${nextParentNum}">Choose file</label>
				</div>
		   	</div>
		</div>`;
	}
	$('#parentRow').append(html);
}

//delete input for parent
function delParent() {
	var parentNum = getLastNum("parentNum");
	$(`#p` + parentNum).remove();
	$(`#pp` + parentNum).remove();
	$(`#ppp` + parentNum).remove();
}

//add inputs for child
function addChild() {
	var childNum = getLastNum("childNum");
	if(Number(childNum) == 12) {
		alert(`max`);
		return;
	}
	var nextChildNum = Number(childNum) + 1;
	var html;
	if(nextChildNum == 1) {
		html = `
		<div id="c${nextChildNum}" class="col-xs-12 col-sm-8 col-md-6">
			<div class="form-check form-check-inline">
				<input id="cGender${nextChildNum}m" name="cGender${nextChildNum}" class="form-check-input" type="radio" value="m" checked>
				<label class="form-check-label" for="cGender${nextChildNum}m">Male</label>
			</div>
			<div class="form-check form-check-inline">
				<input id="cGender${nextChildNum}f" name="cGender${nextChildNum}" class="form-check-input" type="radio" value="f">
				<label class="form-check-label" for="cGender${nextChildNum}f">Female</label>
			</div>
		</div>
		<div id="cc${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text childNum">${nextChildNum + '.'}</span>
				</div>
			  	<input id="childName${nextChildNum}" type="text" class="form-control" placeholder="What's your child's name?">
		  	</div>
		</div>
		<div id="cc${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="childPhoto${nextChildNum}" type="file" accept="image/*" class="custom-file-input" onchange="readUrl(this)">
					<input id="childPhoto${nextChildNum}_64" tyle="hidden">
					<label id="childPhoto${nextChildNum}_label" class="custom-file-label">Choose file</label>
				</div>
		   	</div>
		</div>`;
	} else {
		html = `
		<div id="c${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="form-check form-check-inline">
				<input id="cGender${nextChildNum}m" name="cGender${nextChildNum}" class="form-check-input" type="radio" value="m" checked>
				<label class="form-check-label" for="cGender${nextChildNum}m">Male</label>
			</div>
			<div class="form-check form-check-inline">
				<input id="cGender${nextChildNum}f" name="cGender${nextChildNum}" class="form-check-input" type="radio" value="f">
				<label class="form-check-label" for="cGender${nextChildNum}f">Female</label>
			</div>
		</div>
		<div id="cc${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text childNum">${nextChildNum + '.'}</span>
				</div>
			  	<input id="childName${nextChildNum}" type="text" class="form-control" placeholder="What's your child's name?">
		  	</div>
		</div>
		<div id="ccc${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="childPhoto${nextChildNum}" type="file" accept="image/*" class="custom-file-input" onchange="readUrl(this)">
					<input id="childPhoto${nextChildNum}_64" tyle="hidden">
					<label id="childPhoto${nextChildNum}_label" class="custom-file-label">Choose file</label>
				</div>
		   	</div>
		</div>`;
	}
	$(`#childrenRow`).append(html);
}

//delete input for child
function delChild() {
	var childNum = getLastNum("childNum");
	$(`#c` + childNum).remove();
	$(`#cc` + childNum).remove();
	$(`#ccc` + childNum).remove();
}

//create my family tree svg
function toResultPage() {
	var data = createData();
	sessionStorage.setItem("data", JSON.stringify(data));
	location.href = "myFamilyTree_result.html";
}

//create svg
function members(data) {
	//me
	var myPosition = allPosition.me;
	addElement(data, myPosition);
	//spouse
	var spousePosition = allPosition.spouse;
	var spouseData = data.spouse;
	addElement(spouseData, spousePosition);
	//parent
	var parentPosition = allPosition.parent;
	var parentPositionLength = Object.keys(parentPosition).length;
	var parentData = data.parent;
	var parentCount = parentData.length;
	if(parentCount != 0) {
		if(parentCount <= 2) {
			var count = 0;
			for(var index in parentData) {
				count ++;
				addElement(parentData[index], parentPosition[count]);
			}
		} else {
			var count = -1;
			for(var index in parentData) {
				count ++;
				addElement(parentData[index], parentPosition[count]);
			}
		}
	}
	//children
	var childrenPosition = allPosition.children;
	var childrenPositionLength = Object.keys(childrenPosition).length;
	var childrenData = data.children;
	var childrenCount = childrenData.length;
	if(childrenCount != 0) {
		if(childrenCount <= 2) {
			var count = 1;
			for(var index in childrenData) {
				count ++;
				addElement(childrenData[index], childrenPosition[count]);
			}
		} else if(childrenCount <= 4) {
			var count = 0;
			for(var index in childrenData) {
				count ++;
				addElement(childrenData[index], childrenPosition[count]);
			}
		} else {
			var count = -1;
			for(var index in childrenData) {
				count ++;
				addElement(childrenData[index], childrenPosition[count]);
			}
		}
	}
}

function addElement(data, position) {
	if(data.name) {
		var svg = document.getElementById(`svg_tree`);
		var circleImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
		circleImg.style.width = '84px';
		circleImg.style.height = '63px';
		circleImg.setAttributeNS(null,'width','84');
		circleImg.setAttributeNS(null,'height','63');
		circleImg.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','img/img1.png');
		circleImg.setAttributeNS(null, 'transform', 'translate(' + position.circleImg.x +',' + position.circleImg.y + ')');
		svg.appendChild(circleImg);
		var clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
		clipPath.setAttributeNS(null,'id','clipImg');
		var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		circle.setAttributeNS(null,'cx','42');
		circle.setAttributeNS(null,'cy','40');
		circle.setAttributeNS(null,'r','40'); 
		clipPath.appendChild(circle);
		svg.appendChild(clipPath);
		var photoImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
		photoImg.style.width = '84px';
		photoImg.style.height = '63px';
		photoImg.setAttributeNS(null,'width','84');
		photoImg.setAttributeNS(null,'height','63');
		var imageBse64Str = data.imageBase64Str;
		if(imageBse64Str == "") {
			if(data.gender == "f") {
				imageBse64Str = 'img/img-g.png';
			} else if(data.gender == "m") {
				imageBse64Str = 'img/img-b.png';
			}
		}
		photoImg.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', imageBse64Str);
		photoImg.setAttributeNS(null, 'transform', 'translate(' + position.photoImg.x +',' + position.photoImg.y + ')');
		photoImg.setAttributeNS(null,'clip-path','url(#clipImg)');
		svg.appendChild(photoImg);
		var textBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		textBar.style.width = '100px';
		textBar.style.height = '30px';
		textBar.setAttributeNS(null,'width','100');
		textBar.setAttributeNS(null,'height','30');
		textBar.setAttributeNS(null,'rx','10');
		textBar.setAttributeNS(null,'ry','10');
		textBar.setAttributeNS(null,'fill','rgb(246, 174, 151)');
		textBar.setAttributeNS(null, 'transform', 'translate(' + position.textBar.x +',' + position.textBar.y +')');
		svg.appendChild(textBar);
		var name = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		name.setAttributeNS(null,'font-size','16');
		name.setAttributeNS(null,'text-anchor','middle');
		name.setAttributeNS(null,'x','10');
		name.setAttributeNS(null,'y','20');
		name.setAttributeNS(null, 'transform', 'translate(' + position.id.x +',' + position.id.y +')');
		name.textContent = data.name;
		svg.appendChild(name);
	}
}

//create json data
function createData() {
	const data = {};
	//me
	const myName = $(`#myName`).val();
	const myPhoto = $(`#myPhoto_64`).val();
	const myGender = $(`input[name=myGender]:checked`).val();
	data.name = myName;
	data.imageBase64Str = myPhoto;
	data.gender = myGender;
	//spouse
	const spouse = {};
	spouse[`name`] = $(`#spouseName`).val();
	spouse[`imageBase64Str`] =  $(`#spousePhoto_64`).val();
	spouse[`gender`] = $(`input[name=sGender]:checked`).val();
	data.spouse = spouse;
	//parent
	const parent = [];
	const parentNum = getLastNum(`parentNum`);
	for(let i = 1; i <= parentNum; i++) {
		const obj = {};
		obj[`name`] = $(`#parentName` + i).val();
		obj[`imageBase64Str`] = $(`#parentPhoto` + i + `_64`).val();
		obj[`gender`] = $(`input[name=pGender` + i + `]:checked`).val();
		parent.push(obj);
	}
	data.parent = parent;
	//children
	const children = [];
	const childNum = getLastNum(`childNum`);
	for(let i = 1; i <= childNum; i++) {
		const obj = {};
		obj[`name`] = $(`#childName` + i).val();
		obj[`imageBase64Str`] =  $(`#childPhoto` + i + `_64`).val();
		obj[`gender`] = $(`input[name=cGender` + i + `]:checked`).val();
		children.push(obj);
	}
	data.children = children;
	return data;
}

// get last index by class name.
function getLastNum(className) {
	var lastNum = $(`.` + className + `:last`).text().replace(`.`,``);
	return lastNum;
}

// back to main
function back() {
	sessionStorage.clear();
	location.href = "myFamilyTree.html";
}