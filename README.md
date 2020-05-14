## Diez custom prefabs example

This is an example project to demonstrate a few ways to declare custom Diez
prefabs:

- A prefab that extends a built-in prefab (`CustomColor`)
- A prefab made from scratch that defines a binding (`CustomColorFromScratch`)
- A prefab that doesn't  define a binding (`Margin`)

### Background

Bindings are declared on a prefab-basis, and you need to tell the compiler a few
things:

- Where to look for the prefab (let's call this PREFAB_SOURCE )
- The name of the prefab (let's call this PREFAB_NAME )
- What target(s) do you want to declare (let's call this TARGET_NAME)
- The location of the binding (let's call this BINDING_LOCATION)

With this in mind, the general structure to declare a binding is:

```json
"bindings": {
    "PREFAB_SOURCE:PREFAB_NAME": {
      "TARGET_NAME": "BINDING_LOCATION"
    }
}
```

Having this said, there are a couple of important things to keep in mind:

The compiler needs to be able to require your prefab, for this you need to:

- Ensure that the prefab is exported from PREFAB_SOURCE
- Ensure that PREFAB_SOURCE can be required, GOTCHA: If you want to define a
  binding for a prefab that lives in the same package you are declaring your
  binding, use . as PREFAB_SOURCE, check `.diezrc` for an example.
