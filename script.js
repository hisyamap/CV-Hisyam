function pengecekan(){
	if(document.feedback.nama.value==""){
		alert("Nama anda diisi terlebih dahulu");
		document.feedback.nama.focus();
		return false;
	}
	else if(document.feedback.email.value==""){
		alert("Email anda harus dimasukan");
		document.feedback.email.focus();
		return false;
	}
	else if(document.feedback.msg.value==""){
		alert("Isi dengan pesan atau kesan anda dahulu");
		document.feedback.msg.focus();
		return false;
	}
	else{
		return true;
	}
}

function SubmitForm() {
  document.getElementById("contactform").submit();
}
