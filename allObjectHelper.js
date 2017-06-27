({
    // following method will call controller method GetObjectList which returns all object list
    GetObjectList: function(component) {
        var action = component.get("c.GetObjectList");
        console.log(action); 
        action.setCallback(this,function(a){
            //assignment of list of all Objects to component object "allObjectDtlLst"
            component.set("v.allObjectDtlLst",a.getReturnValue());
            //console.log(component.get("v.allObjectDtlLst"));    
        });       
        $A.enqueueAction(action);        	 
    },
    // following method will call controller method GetFieldList which returns Fields detail list
    GetFieldList: function(component,Name) {
        var action2 = component.get("c.GetFieldList");
        action2.setParams({ 
            // passing selected objects Name to get its field detail
            "objectName": Name
        });
        action2.setCallback(this,function(a){
            //assignment of list of field to component object "selObjectFields"
            component.set("v.selObjectFields",a.getReturnValue());
        });       
        $A.enqueueAction(action2);        	 
    },
})
