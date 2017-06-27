({
    // following method will return all object list on page load
    doInit : function(component, event, helper) {
        helper.GetObjectList(component); 
    },
    // method that opens a popup
    openModel: function(component, event, helper) {
        component.set("v.isOpen", true); // assigned true to isOpen that will display popup
        helper.GetFieldList(component,event.target.id); // calling method to get fields detail for selected object
    },
    // method that closes a popup
    closeModel: function(component, event, helper) {
        component.set("v.isOpen", false);
    },
})
