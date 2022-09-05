// @ts-nocheck
sap.ui.define([
    "dtt/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent",
    "./controller/HelloDialog"
],
    /**
     * @param{typeof dtt.sapui5.model.Models} Models
     * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param{typeof sap.ui.core.UIComponent} UIComponent
     */

    function (Models, ResourceModel, UIComponent, HelloDialog) {
        return UIComponent.extend("dtt.sapui5.Component", {
            // declaración metadata
            metadata: {
                manifest: "json"
            },
            init: function () {
                UIComponent.prototype.init.apply(
                    this, arguments);
                this.setModel(Models.createRecipient());
                var i18nModel = new ResourceModel({ bundleName: "dtt.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n")
                this._HelloDialog = new HelloDialog(this.getRootControl());
            },
            exit:function(){
                this._HelloDialog.destroy();
                delete this._HelloDialog;
            },
            openHelloDialog:function(){
                this._HelloDialog.open();
            }
        })
    }
)