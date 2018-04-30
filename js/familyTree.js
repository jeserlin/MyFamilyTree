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
					<input type="file" class="custom-file-input">
					<label class="custom-file-label">Choose file</label>
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
					<input type="file" class="custom-file-input">
					<label class="custom-file-label">Choose file</label>
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
					<input type="file" class="custom-file-input">
					<label class="custom-file-label">Choose file</label>
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
					<input type="file" class="custom-file-input">
					<label class="custom-file-label">Choose file</label>
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

// get last index by class name.
function getLastNum(className) {
	var lastNum = $(`.` + className + `:last`).text().replace(".","");
	return lastNum;
}