var MyApp = san.defineComponent({
  template: '<p>Hello {{name}}</p>',
  initData: function() {
    return {
      name: 'san'
    };
  }
});

var myApp = new MyApp();
myApp.attach(document.body);