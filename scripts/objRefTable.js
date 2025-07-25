const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.TiledBg,
		C3.Plugins.Touch,
		C3.Plugins.Spritefont2,
		C3.Plugins.Browser,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Spritefont2.Acts.AddInstanceVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.TiledBg.Acts.SetImageOffsetX,
		C3.Plugins.TiledBg.Exps.ImageOffsetX,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Bird1: 0},
	{Solid: 0},
	{BotPipe: 0},
	{scored: 0},
	{TopPipe: 0},
	{Bg1: 0},
	{Touch: 0},
	{curr: 0},
	{Score: 0},
	{Base: 0},
	{Restart: 0},
	{Exit: 0},
	{GameOver: 0},
	{Pause: 0},
	{Browser: 0},
	{Unpause: 0},
	{Bg3: 0},
	{Bg2: 0},
	{HGTS: 0},
	{Bird2: 0},
	{Bird3: 0},
	{message: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{BurungMerah: 0},
	{Mouse: 0},
	{Bird: 0},
	{Javi: 0},
	{Lose: 0}
];

self.InstanceType = {
	Bird1: class extends self.ISpriteInstance {},
	BotPipe: class extends self.ISpriteInstance {},
	TopPipe: class extends self.ISpriteInstance {},
	Bg1: class extends self.ITiledBackgroundInstance {},
	Touch: class extends self.IInstance {},
	Score: class extends self.ISpriteFontInstance {},
	Base: class extends self.ITiledBackgroundInstance {},
	Restart: class extends self.ISpriteInstance {},
	Exit: class extends self.ISpriteInstance {},
	GameOver: class extends self.ISpriteInstance {},
	Pause: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Unpause: class extends self.ISpriteInstance {},
	Bg3: class extends self.ITiledBackgroundInstance {},
	Bg2: class extends self.ISpriteInstance {},
	HGTS: class extends self.ISpriteInstance {},
	Bird2: class extends self.ISpriteInstance {},
	Bird3: class extends self.ISpriteInstance {},
	message: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	BurungMerah: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Bird: class extends self.ISpriteInstance {},
	Javi: class extends self.ISpriteInstance {}
}