## Form-validator ##

Used to create forms with validation using react-hooks

To use:

### Form ###

```js

import {Form} from 'react-form-validator';

...
return (
  <Form>
    Your stuff to consume goes here
  </Form>
)
```

Proptypes:
* initialState - Add initial state object (used when putting existing data into the form)


### Submit ###
```js
import {Submit} from 'react-form-validator';
return (
  <Submit onClick={(state) => doSomething(state)} />
)
```

The onClick prop will get the form-value object in return if the validation turns out ok. If not, the submit button will only trigger new validation until the form is deemed valid.

PropTypes:
* color (bootstrap color)
* onClick (function on what to do when validation is valid)



## Adding some components to the form ##
``` js
import { TextInput } from 'react-form-validator';

<TextInput name="customerName" label="Name" />

```

Adding a component will now add a "customerName" to the values if set. If clicking submit, it will now return {'customerName': 'someValue'} if value has been set.

Make sure not to use the same name for a component twice in the same form, since that will cause two inputs being mapped to the same data. 

### Adding some validation-rules ###

```js
import { required } from 'react-form-validator/rules';

<TextInput name="customerName" label="Name" rules={[required]} />

```

When clicking the submit button, it will now check if the value has been set, and flag it as invalid if it is empty. The rules property is an array, and several rules can apply. 

Ex:
```js
import { required, email } from 'react-form-validator/rules';

<TextInput name="customerEmail" label="Email" rules={[required, email]} />

```

It will now fail if any of the two fails its validation.

PropTypes: 
* name
* label
* rules : array of rules
* type: ex "text", "date" and so on

Other text-inputs that can be used is
* TextArea

They work the same way as TextInput, with the same props. 

## Select ##

The select component is wired a little different than the text-edit components

PropTypes: 

*  label: string,
*  name: string,
*  options: array of option tags (native html)
*  defaultText: string : Will add an extra dropdown value on top with value 0 (ex "--Select some value from the list"),
*  dependencies: array, If you are using nested inputs that depends on eachother, you might want to zero out the underlings of your input
*  rules: array

```js
import { Select } from 'react-form-validator';

const opts = someOptions.map(o => (<option key={o.value} value={o.value}>{o.name]</option>));

//When selecting a different group, reset the category value selection to force a new selection
<Select name="group" dependencies={['category']} options={opts}/>

<Select name="category" />

```

## Using the api ##

More input-variants can be created, to create your own, simply add some hooks to it, and it is hooked up to the validation-form-context..

Ex:
```js
  import { useRegisterComponent } from 'react-form-validator';

  const doSomeStuff = (props) => {

    const { value, invalid, update } = useRegisterComponent(props);

    return (

    );

  }

```

useRegisterComponent will return 3 properties
* value : the current value of the instance (based on name property)
* invalid: this will be an object if the instance is not valid caused by rules, will be ex { valid: false, errorMessage: 'Some error'} if not valid
* update (value, name (optional)) : use to update value. name will be autowired if not specified. Use both parameters if you want to update some property outside of this instance (ex dependent data you want to nullify because a new choice has been given, ref: select->dependencies) 

## Get stuff from the context ##

```js
import { validationContext } from 'react-form-validator';
import React, {useContext} from 'react';

const doSomeStuff = () => {
  const {
    register,
    unregister,
    updateValue,
    validate,
    invalid,
    values,
    components
  } = useContext(validationContext);
}
```

*    register: function (name, rules) : Registers a component in the context
*    unregister: function(name) : Removes a component in the context
*    updateValue: (name, value) : Updates an items value,
*    validate: function to trigger a validate, returns object {valid: true firstError: Object}, where the firstError will be the first error render-wize to occure. That way, you can find it and scroll to it if needed.
*    invalid : object containing validation-result
*    values : object containing all the values in the form,
*    components : array of all components registered