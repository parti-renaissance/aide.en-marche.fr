
var FormStuff = {

init: function() {
    this.bindUIActions();
  },

   bindUIActions: function() {

      document.getElementById('vous_residez').addEventListener('change', function() {
        FormStuff.toggle(this,"is-france","France")
      });
   },

   toggle: function(el, idTarget, value) {
     var div = document.getElementById(idTarget);
     var input = document.querySelectorAll('#is-france input')[0];

     if (el.value == value) {
       div.classList.add("visible");
       input.setAttribute("required", true);

     } else {
        div.classList.remove("visible");
        input.removeAttribute("required");
     }
   }

  // applyConditionalRequired: function(classname) {
  //
  //   var requiredIndex = null;
  //
  //  $.each( $("." + classname), function( index, value ) {
  //     var el = $(this);
  //
  //      if ( (el.attr("type") == "checkbox" && el.is(":checked"))
  //           || ( el.attr("type") == "text" && el.val() !== "" )) {
  //       requiredIndex = index;
  //
  //       disableAllButIndex(classname, requiredIndex);
  //       return;
  //     }
  //
  //     disableAllButIndex(classname, requiredIndex);
  //   });
  // }
  //
  // disableAllButIndex: function(classname, requiredIndex) {
  //
  //   $.each($("." + classname), function(index, value ) {
  //
  //     var el = $(this);
  //
  //     if (requiredIndex != null && index != requiredIndex) {
  //         el.attr("disabled", true);
  //     } else if (requiredIndex == null) {
  //       el.attr("disabled", false);
  //     }
  //   });
  //
  // };
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
      FormStuff.init();
   }
}
