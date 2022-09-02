//eslint-disable-next-line no-undef
sap.ui.define(['sap/ui/core/ComponentContainer'],
    /**
     * @param{typeof sap.ui.core.ComponentContainer} ComponentContainer
     */
    function (ComponentContainer) {
        //slint-disable-next-line no-undef
        // alert("UI5 is ready")
        "use strict";
        new ComponentContainer({
            name: "dtt.sapui5",
            settings: { id: "sapui5" },
            async: true
        }).placeAt("contenido");
        // XMLView.create({
        //     viewName:"dtt.sapui5.view.App"
        // }).then(function(oView){
        //     oView.placeAt("contenido")
        // })
        // new Text ({
        //     text:"Hello World!"
        // }).placeAt("contenido");
    });