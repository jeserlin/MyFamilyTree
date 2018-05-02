//read photo infotmation
function readUrl(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let imgData = e.target.result;//image:base64
      let imgName = input.files[0].name;
      let labelId = input.id + `_label`;
      let base64Id = input.id + `_64`;
      $('#' + labelId).text(imgName);
      $('#' + base64Id).val(imgData);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

//add inputs for parent
function addParent() {
	var parentNum = getLastNum("parentNum");
	if(Number(parentNum) == 4) {
		alert("max");
		return;
	}
	var nextParentNum = Number(parentNum) + 1;
	var html;
	if(nextParentNum == 1) {
		html = `
		<div id="p${nextParentNum}" class="col-xs-12 col-sm-8 col-md-6">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text parentNum">${nextParentNum + '.'}</span>
				</div>
			  	<input type="text" class="form-control" placeholder="What's your parent's name?">
		  	</div>
		</div>
		<div id="pp${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="parentPhoto${nextParentNum}" type="file" class="custom-file-input" onchange="readUrl(this)">
					<input id="parentPhoto${nextParentNum}_64" tyle="hidden">
					<label id="parentPhoto${nextParentNum}_label" class="custom-file-label" for="parentPhoto${nextParentNum}">Choose file</label>
				</div>
		   	</div>
		</div>`;
	} else {
		html = `
		<div id="p${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text parentNum">${nextParentNum + '.'}</span>
				</div>
			  	<input type="text" class="form-control" placeholder="What's your parent's name?">
		  	</div>
		</div>
		<div id="pp${nextParentNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="parentPhoto${nextParentNum}" type="file" class="custom-file-input" onchange="readUrl(this)">
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
}

//add inputs for child
function addChild() {
	var childNum = getLastNum("childNum");
	if(Number(childNum) == 12) {
		alert("max");
		return;
	}
	var nextChildNum = Number(childNum) + 1;
	var html;
	if(nextChildNum == 1) {
		html = `
		<div id="c${nextChildNum}" class="col-xs-12 col-sm-8 col-md-6">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text childNum">${nextChildNum + '.'}</span>
				</div>
			  	<input type="text" class="form-control" placeholder="What's your child's name?">
		  	</div>
		</div>
		<div id="cc${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="childPhoto${nextChildNum}" type="file" class="custom-file-input" onchange="readUrl(this)">
					<input id="childPhoto${nextChildNum}_64" tyle="hidden">
					<label id="childPhoto${nextChildNum}_label" class="custom-file-label">Choose file</label>
				</div>
		   	</div>
		</div>`;
	} else {
		html = `
		<div id="c${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="input-group-prepend">
					<span class="input-group-text childNum">${nextChildNum + '.'}</span>
				</div>
			  	<input type="text" class="form-control" placeholder="What's your child's name?">
		  	</div>
		</div>
		<div id="cc${nextChildNum}" class="col-xs-12 col-sm-8 offset-sm-4 col-md-6 offset-md-4 mt-3">
			<div class="input-group">
				<div class="custom-file">
					<input id="childPhoto${nextChildNum}" type="file" class="custom-file-input" onchange="readUrl(this)">
					<input id="childPhoto${nextChildNum}_64" tyle="hidden">
					<label id="childPhoto${nextChildNum}_label" class="custom-file-label">Choose file</label>
				</div>
		   	</div>
		</div>`;
	}
	$('#childrenRow').append(html);
}

//delete input for child
function delChild() {
	var childNum = getLastNum("childNum");
	$(`#c` + childNum).remove();
	$(`#cc` + childNum).remove();
}

//create my family tree svg
function createSvg() {
	var data = createData();
	console.log(data);
}

//create json data
function createData() {
	var data = `
		{}
	`;
	return data;
}

// get last index by class name.
function getLastNum(className) {
	var lastNum = $(`.` + className + `:last`).text().replace(".","");
	return lastNum;
}