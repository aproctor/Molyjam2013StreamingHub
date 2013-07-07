

var embedVids = function(focus) {
  var $container = $('#streamgrid');

  var bw = 16;
  var bh = 10;
  var scale = Math.floor(($('.safezone').height() - 100) / bh / 3);

  //var height = 168;
  //var width = 300;
  var height = bh * scale;
  var width = bw * scale;

  var hosts = [{
    name: 'Bayreuth, Germany',
    feed: 'MJBayreuth'
  },{
    name: 'Utrecht, Netherlands',
    feed: 'molyjamNL'
  },{
    name: 'Toronto',
    feed: 'molyjamto',
    justin_tv_fg: true
  },{
    name: 'San Francisco, CA',
    feed: 'molyjamsf'
  },{
    name: 'Los Angeles, CA',
    feed: 'molyjamla'
  },{
      name: 'Durham, NC',
      feed: 'MolyJamDurham'
  },{
    name: 'Oakland, CA',
    feed: 'oaklandmolyjam',
    justin_tv_fg: true
  },{
      name: 'Las Vegas, NV',
      feed: 'molyjamLV'
  },{
    name: 'Glasgow, Scotland',
    feed: 'molyjamglasgow'
  },{
    name: 'Karlrushe',
    feed: 'molyjamkarlsruhe'
  },{
    name: 'Düsseldorf, Germany',
    feed: 'molyjamDuesseldorf'
  },{
    name: 'London, UK',
    feed: 'molyjamlondon'
  },{
    name: 'Rome, Italy',
    feed: 'molyjamrome'
  },{
      name: 'Aalborg, Denmark',
      feed: 'molyjamdk'
  },{
    name: 'Concord, NH',
    feed: 'NHTIAGGP'
  },{
    name: 'Lisbon, Portugal',
    feed: 'molyjamLisbon'
  },
  {
    name: 'Tel Aviv',
    feed: 'molyjamTA'
  }
  ];

  var buffer = [];

  var gridCount = 9;
  if(focus) {
    for(var i = 0; i < hosts.length && i < 9; i++) {
      var host = hosts[i];
      if(host.feed == focus) {
        embedVid(width * 2, height *2, host, buffer, true);
        break;
      }
    }
    gridCount -= 3;
  }

  for(var i = 0; i < hosts.length && i < gridCount; i++) {
    var host = hosts[i];
    if(host.feed != focus) {
      embedVid(width,height, host, buffer);
    }
  }
  $container.html(buffer.join(''));
  console.log(buffer.join(''));
};

var embedVid = function(width, height, host, buffer, focused) {

  var service = "twitch";
  if(host.justin_tv_fg) {
    service = "justin";
  }

  buffer.push('<div class="vid-container');
  if(focused) {
    buffer.push(' focused');
  }
  buffer.push('"><div class="vid-embed"><object type="application/x-shockwave-flash" height="');
  buffer.push(height);
  buffer.push('" width="');
  buffer.push(width);
  buffer.push('" data="http://www.');
  buffer.push(service);
  buffer.push('.tv/widgets/live_embed_player.swf?channel=');
  buffer.push(host.feed);
  buffer.push('" bgcolor="#000000"><param name="allowFullScreen" value="true" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="movie" value="http://www.');
  buffer.push(service);
  buffer.push('.tv/widgets/live_embed_player.swf" /><param name="flashvars" value="hostname=www.');
  buffer.push(service);
  buffer.push('.tv&channel=');
  buffer.push(host.feed);
  buffer.push('&auto_play=true&start_volume=');
  if(focused) {
    buffer.push(25);
  } else {
    buffer.push(0);
  }
  buffer.push('" /></object></div><span class="caption">');
  buffer.push(host.name);
  buffer.push(': <span class="molygreen">');
  buffer.push(host.feed);
  buffer.push('</span></span></div>');

};
