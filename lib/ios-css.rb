require 'compass'
extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('ios-css', :path => extension_path)

require File.join(File.dirname(__FILE__), 'ios-css', 'sass_extensions')
