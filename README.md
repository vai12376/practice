# practice

## interpolation

 Angular interpolation is used display a component property in the respective view template with double curly braces syntax.
 
 Interpolation is used for one way data binding. Interpolation moves data in one direction from our components to HTML elements.
 
 ## property binding
 
 What is a property binding?
Property binding: Property binding is a one-way mechanism that lets you set the property of a view element. 
It involves updating the value of a property in the component and binding it to an element in the view template.
Property binding uses the [] syntax for data binding.

## ngOnChanges() method

Called before ngOnInit() (if the component has bound inputs) and
 whenever one or more data-bound input properties change.

Note that if your component has no inputs or you use it without providing any inputs,
 the framework will not call ngOnChanges().

## ngOnInit() method

Called once, after the first ngOnChanges(). 
ngOnInit() is still called even when ngOnChanges() is not
 (which is the case when there are no template-bound inputs).

## ngDoCheck() method 

Detect and act upon changes that Angular can't or won't detect on its own. 

Called immediately after ngOnChanges() on every change detection run,
 and immediately after ngOnInit() on the first run.

## View and content 

the view refer to the components template.

the content refers to the projected content from the parent components
