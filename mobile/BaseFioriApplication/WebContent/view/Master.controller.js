sap.ui.core.mvc.Controller.extend("BaseFioriApplication.view.Master", {
	
	onInit: function() {
		var view = this.getView();

//		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
//			if (oEvent.getParameter("name") === "Detail" && !(oEvent.getParameter("arguments").from === "master")) { // initial call via bookmark
//				// select the listItem referenced in the bookmark
//				var oList = view.byId("list"),
//					aItems = oList.getItems();
//				for (var i = 0; i < aItems.length; i++) { // TODO: is there a more efficient way??
//					if (aItems[i].getBindingContext().getPath() === "/" + oEvent.getParameter("arguments").contextPath) {
//						oList.setSelectedItem(aItems[i], true);
//						break;
//					}
//				}
//			}
//		}, this);
	},
	
	_handleSelect: function(oEvent) {
		var oListItem = oEvent.getParameter("listItem");
		sap.ui.core.UIComponent.getRouterFor(this).navTo("Detail",{from: "master", contextPath: oListItem.getBindingContext().getPath().substr(1)});
	}
});	