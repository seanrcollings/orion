require "file"

CONSTANT = 2

class Foo
  CONSTANT = 2
  def thing
    puts 'hi there'
  end
end

Foo.new()

def foo(val)
end

foo('thing')
# comment goes there