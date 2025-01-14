[
  import_deps: [:ecto, :phoenix, :surface, :stream_data],
  inputs: ["*.{ex,exs}", "priv/*/seeds.exs", "{config,lib,test}/**/*.{ex,exs}"],
  surface_inputs: ["{lib,test}/**/*.{ex,exs,sface}"],
  subdirectories: ["priv/*/migrations"]
]
