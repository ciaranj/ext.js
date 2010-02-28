
describe 'Object'
  describe '#clone'
    it 'should return a copy'
      var a = { foo: 'bar' }
      var b = a.clone
      a.should.not.equal b
      b.should.have_property 'foo', 'bar'
    end
  end

  describe '#keys'
    it 'should return own property keys'
      { foo: 'bar', baz: 'raz' }.keys.should.eql ['foo', 'baz']
    end
  end

  describe '#values'
    it 'should return an array containing all the values of an object'
      { foo: 'bar', baz: 'raz' }.values.should.eql ['bar', 'raz']
    end
  end

  describe '#tap'
    it 'should allow to tap into function call chains'
      var result
      'user_names'.camelcase.tap(function (x) { result = x }).singular.should.eql 'UserName'
      (result == 'UserNames').should.be_true
    end

    it 'should support a given context'
      var result, obj = { foo: 'bar' }
      'user_names'.camelcase.tap(function (x) { result = (x + this.foo) }, obj).singular.should.eql 'UserName'
      result.should.eql 'UserNamesbar'
    end
  end

  describe '#merge'
    it 'should merge the given object and return _this_'
      var source = { foo: 'bar' }
      var target = {}
      target.merge(source).should.eql target
      target.foo.should.eql 'bar'
    end

    it 'should give the object being merged precendence'
      var source = { foo: 'bar' }
      var target = { foo: 'baz' }
      target.merge(source)
      target.foo.should.eql 'bar'
    end

    it 'should give the object receiving the merge precendence if `reverse` is true'
      var source = { foo: 'bar' }
      var target = { foo: false }
      target.merge(source, true)
      target.foo.should.be_false
    end
  end

  describe '#map'
    it 'should map the object'
      { foo: 1 }.map(function (x) { return x + 1 }).foo.should.eql 2
    end

    it 'should support a given context'
      var obj = { foo: 41 }
      { foo: 1 }.map(function (x) { return x + this.foo }, obj).foo.should.eql 42
    end

    it 'should pass the arguments in the expected order'
      var obj = { foo: 'bar' }, args
      obj.map(function () { args = arguments })
      args[0].should.eql 'bar'
      args[1].should.eql 'foo'
      args[2].should.eql obj
    end
  end
end

