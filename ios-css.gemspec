Gem::Specification.new do |s|
  # Release Specific Information
  s.version = "0.0.2"
  s.date = "2011-06-07"

  # Gem Details
  s.name = "ios-css"
  s.authors = ["Philipp Bosch"]
  s.summary = %q{An extension for Compass that aims to provide Sass mixins for common user interface elements from iOS}
  s.description = %q{An extension for Compass that aims to provide Sass mixins for common user interface elements from iOS}
  s.email = "hello@pb.io"
  s.homepage = "http://code.pb.io/ios-css/"

  # Gem Files
  s.files = %w(README.md)
  s.files += Dir.glob("lib/**/*.*")
  s.files += Dir.glob("stylesheets/**/*.*")
  s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  s.rubygems_version = %q{1.3.6}
  s.add_dependency("compass", [">= 0.11.beta.3"])
end
