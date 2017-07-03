Page({
  data: {
    curTab: 'glass',
    curOption: {
      glass: 'glass1',
      layer: 'layer1',
      color: '',
      fruit: '',
      decorate: ''
    },
    triggerShake: false,
    triggerDecorate: false,
    color: {
      trigger: false,
      placeholder: {
        cur: [30, 135],
        glass1: [30, 135],
        glass2: [40, 170],
        glass3: [28, 65]
      },
      gradient: '',
      colors: [],
      color1: '#ff9a96',
      color2: '#bff2ff',
      color3: '#ffbfec',
      color4: '#fff5bd',
      color5: '#a9ffed',
      color6: '#ffd9ab'
    },
    layer: {
      layer1: [0, 1],
      layer2: [0, 0.33, 1],
      layer3: [0, 0.25, 0.5, 1],
      layer4: [0, 0.5, 1],
      layer5: [0, 0.75, 1],
      layer6: [0, 0.33, 0.66, 1]
    },
    fruit: {
      position: [],
      glass1: {
        fruit1: [67, 78],
        fruit2: [65, 78],
        fruit3: [65, 85],
        fruit4: [58, 80],
        fruit5: [59, 80],
        fruit6: [60, 75]
      },
      glass2: {
        fruit1: [35, 70],
        fruit2: [30, 70],
        fruit3: [30, 75],
        fruit4: [23, 70],
        fruit5: [26, 73],
        fruit6: [25, 70]
      },
      glass3: {
        fruit1: [142, 78],
        fruit2: [140, 78],
        fruit3: [140, 84],
        fruit4: [133, 78],
        fruit5: [135, 78],
        fruit6: [135, 72]
      }
    },
    decorate: {
      position: [],
      glass1: {
        decorate1: [-24, 36],
        decorate2: [90, 78],
        decorate3: [-15, 105],
        decorate4: [-10, 45],
        decorate5: [-10, 95],
        decorate6: [-15, 100]
      },
      glass2: {
        decorate1: [-15, 30],
        decorate2: [130, 74],
        decorate3: [-10, 115],
        decorate4: [0, 40],
        decorate5: [0, 100],
        decorate6: [-5, 105]
      },
      glass3: {
        decorate1: [-13, 5],
        decorate2: [10, 72],
        decorate3: [-17, 140],
        decorate4: [0, 20],
        decorate5: [-12, 122],
        decorate6: [-10, 135]
      }
    }
  },
  onReady: function () {
  
  },
  handleTab: function (e) {
    var curTab = e.target.dataset.tab;
    this.setData({
      curTab: curTab
    });
  },
  handleOption: function (e) {
    var option = e.target.dataset.option;
    switch (this.data.curTab) {
      case 'glass':
        var fruitPosition = this.data.fruit[option][this.data.curOption.fruit];
        var colorPlaceholder = this.data.color.placeholder[option];
        this.setData({
          'curOption.glass': option,
          'fruit.position': fruitPosition,
          'color.placeholder.cur': colorPlaceholder
        });
        break;
      case 'fruit':
        var fruitPosition = this.data.fruit[this.data.curOption.glass][option];
        this.setData({
          'curOption.fruit': option,
          'fruit.position': fruitPosition
        }); 
        break;
      case 'layer':
        this.data.color.trigger || this.setData({
          'curOption.layer': option
        }); 
        break;
      case 'color':
        var layerParams = this.data.layer[this.data.curOption.layer];
        var color = this.data.color[option];
        var colors = this.data.color.colors;
        var colorLength = layerParams.length - 1;
        var gradient = '';
        (colors.length < colorLength) && colors.push(color);
        for (var i = 0;i < colors.length;i++) {
          gradient += 'color-stop(' + layerParams[i] + ',' + colors[i] + '),color-stop(' + layerParams[i + 1] + ',' + colors[i] + '),';
        }
        if (colors.length < colorLength) {
          gradient += 'color-stop(' + layerParams[colors.length] + ',#fff),color-stop(1,#fff),';
        }
        this.setData({
          'color.trigger': true,
          'color.gradient': gradient.slice(0, -1),
          'color.colors': colors
        }); 
        break;
    }
  },
  handleReset: function () {
    this.setData({
      'curOption.color': '',
      'curOption.fruit': '',
      'color.trigger': false,
      'color.gradient': '',
      'color.colors': []
    }); 
  },
  handleShake: function () {
    var _this = this;
    var layerParams = this.data.layer[this.data.curOption.layer];
    var colors = this.data.color.colors;
    var colorLength = layerParams.length - 1;
    var gradient = '';
    for (var i = 0; i < colors.length; i++) {
      gradient += 'color-stop(' + layerParams[i] + ',' + colors[i] + '),';
    }
    if (colors.length < colorLength) {
      gradient += 'color-stop(' + layerParams[colors.length] + ',#fff),color-stop(1,#fff),';
    }
    _this.setData({
      'triggerShake': true
    });
    var t = setTimeout(function () {
      _this.setData({
        'triggerShake': false,
        'triggerDecorate': true,
        'color.gradient': gradient.slice(0, -1)
      });
    }, 600);
  },
  handleDecorate: function (e) {
    var option = e.target.dataset.option;
    var decoratePosition = this.data.decorate[this.data.curOption.glass][option];
    this.setData({
      'curOption.decorate': option,
      'decorate.position': decoratePosition
    });
  },
  handleFinish: function () {
    
  }
});