(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 40.3,
  "class": "PanoramaCameraPosition",
  "pitch": -1.55
 },
 "id": "panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.04,
  "class": "PanoramaCameraPosition",
  "pitch": -12.97
 },
 "id": "panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 128.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_747B8D47_6DA0_F04D_41D2_0E6165A3292B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -49.21,
  "class": "PanoramaCameraPosition",
  "pitch": -21.33
 },
 "id": "panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76CCCCAB_6DA0_F0C6_4193_CFE52EE49DBA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_127B8072_19F2_76C5_417F_336332350224",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_127B8072_19F2_76C5_417F_336332350224_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE",
   "camera": "this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 27.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
 },
 "id": "panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.9,
   "yaw": -111.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BALCONY",
 "id": "panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE",
 "thumbnailUrl": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3034ADC3_1A31_C9CB_41AC_4968B1AC5127",
  "this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 43.24,
   "yaw": -104.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6"
  },
  {
   "backwardYaw": 16.36,
   "yaw": -53.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3"
  },
  {
   "backwardYaw": -80.36,
   "yaw": 118.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5"
  },
  {
   "backwardYaw": -113.27,
   "yaw": -157.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "LIVING ROOM (5)",
 "id": "panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5",
 "thumbnailUrl": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0DEE9DC1_1A12_49C7_41A4_BFAB3D271431",
  "this.overlay_0261F2A9_1A12_DA47_419D_E4CEEAF6D529",
  "this.overlay_02DE7DF6_1A12_49CD_419B_4E46DDE6FF6E",
  "this.overlay_02EE486F_1A12_56DC_41B1_D3691BA7C027",
  "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 126.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74C79CE9_6DA0_F045_41CA_9857F28385C8",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 133.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76901E04_6DA0_F3C3_41AB_001734A000C6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 29.77,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 29.77,
  "pitch": -0.08
 },
 "id": "panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": -0.08,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "targetHfov": 130
  }
 ],
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -99.95,
   "yaw": 35.21,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B"
  },
  {
   "backwardYaw": -32.12,
   "yaw": -15.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222"
  },
  {
   "backwardYaw": 59.82,
   "yaw": 103.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 2 (2)",
 "id": "panorama_12D80741_19F6_5AC7_4194_53D3C58C123D",
 "thumbnailUrl": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_38C4F335_1A0E_7A4F_417D_4E957E212CDE",
  "this.overlay_3E8C4EA3_1A0E_CA4B_41AB_64ED17CDD7E9",
  "this.overlay_3E16BE7A_1A0E_4AC5_418E_648AD2CE9703",
  "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -136.61,
  "class": "PanoramaCameraPosition",
  "pitch": -3.38
 },
 "id": "panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 12.74,
  "class": "PanoramaCameraPosition",
  "pitch": -6.1
 },
 "id": "panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76DAAE23_6DA0_F3C5_41CB_696101E34AE4",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76BA8C8B_6DA0_F0C5_41BD_14A11D690EC9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 78.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76E27E13_6DA0_F3C5_41CC_63DDD934DAC5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 68.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_762F3E33_6DA0_F3C6_41C3_FADB463A68BC",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 147.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76BD5DF4_6DA0_F043_41AB_B44368C7B246",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -14.93,
  "class": "PanoramaCameraPosition",
  "pitch": -0.58
 },
 "id": "panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 141.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74C01CF9_6DA0_F045_41C9_C81BEF9D49B1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -15.79,
   "yaw": -32.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D"
  },
  {
   "backwardYaw": -114.27,
   "yaw": 153.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 2 (1)",
 "id": "panorama_12C81858_19F6_36C5_41B0_CEB505971222",
 "thumbnailUrl": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3BD7A20B_1A12_3A44_41B7_0CC69D0B2EF2",
  "this.overlay_39C2814C_1A11_D6DC_41AF_469508A14CE7",
  "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 132.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_740C3D28_6DA0_F1C3_41D2_F8EAF3E0807C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -172.09,
  "class": "PanoramaCameraPosition",
  "pitch": -2.63
 },
 "id": "panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 65.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_760EFE3B_6DA0_F3C5_41D5_EDCE2B01B2EB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 68.12,
   "yaw": 48.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D"
  },
  {
   "backwardYaw": 89.97,
   "yaw": -30.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "LIVING ROOM (3)",
 "id": "panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72",
 "thumbnailUrl": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D0515BD_1A16_59BF_419A_5772D9DB73F4",
  "this.overlay_0D3E81A4_1A16_D64D_4190_18C619905B5C",
  "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -128.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74414D47_6DA0_F04D_4198_B170154427FE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.03,
   "yaw": -51.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA"
  },
  {
   "backwardYaw": -86.13,
   "yaw": 31.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51"
  },
  {
   "backwardYaw": 50.03,
   "yaw": -154.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 3 (1)",
 "id": "panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2",
 "thumbnailUrl": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3E686539_1A31_DE44_416A_3CC63E47BCC6",
  "this.overlay_3F5F4FA1_1A32_4A44_41B1_C94F05359038",
  "this.overlay_3F3EB3B2_1A32_3A45_41B9_5D0CD28694E1",
  "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 103.79,
   "yaw": 59.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 2 (3)",
 "id": "panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E",
 "thumbnailUrl": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_39DDDDD2_1A0F_C9C5_41A9_A698502B940A",
  "this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -51.72,
   "yaw": 50.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2"
  },
  {
   "backwardYaw": 51.03,
   "yaw": -47.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 3 (2)",
 "id": "panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA",
 "thumbnailUrl": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3F37C6FB_1A33_DBBB_41B4_E0EEFF886F20",
  "this.overlay_3D1B0B42_1A32_4ACE_41B8_A63F4B778F2D",
  "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -26.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_776C2DD7_6DA0_F04D_41CD_0B788A6ECB2D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -78.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77896D77_6DA0_F04E_41D0_768CCD602726",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.42,
   "yaw": -38.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3"
  },
  {
   "panorama": "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -104.22,
   "yaw": 43.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "CORIDOR 2",
 "id": "panorama_2246C220_1A12_5A45_41B8_A80D294A42B6",
 "thumbnailUrl": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_22452220_1A12_5A45_41A5_2F1C98820158",
  "this.overlay_22451220_1A12_5A45_41B4_E1208A9BBE00",
  "this.overlay_22450220_1A12_5A45_41B7_2923A1F10195",
  "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0.36
 },
 "id": "panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 149.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77FF8D96_6DA0_F0CF_4191_AA82DDCB3A96",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -78.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77B6CD67_6DA0_F04E_41D5_B753EBF39C51",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -40.45,
  "class": "PanoramaCameraPosition",
  "pitch": -4.58
 },
 "id": "panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -19.18,
  "pitch": 0
 },
 "id": "camera_74307D18_6DA0_F1C3_41D3_5441F32AA7E4",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.55,
  "class": "PanoramaCameraPosition",
  "pitch": -22.76
 },
 "id": "panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -76.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77BDCD67_6DA0_F04E_41C9_9746679C51E6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -170.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76CACE23_6DA0_F3C5_419E_1431087CF550",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -113.36,
  "class": "PanoramaCameraPosition",
  "pitch": -10.08
 },
 "id": "panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -30.31,
  "class": "PanoramaCameraPosition",
  "pitch": -3.31
 },
 "id": "panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.17,
  "class": "PanoramaCameraPosition",
  "pitch": 2.29
 },
 "id": "panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77C92D96_6DA0_F0CF_41BB_F830A1839090",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.84,
   "yaw": 160.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2"
  },
  {
   "backwardYaw": -30.36,
   "yaw": 89.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72"
  },
  {
   "backwardYaw": 128.16,
   "yaw": 7.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D"
  },
  {
   "backwardYaw": 118.36,
   "yaw": -80.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5",
 "class": "Panorama",
 "label": "LIVING ROOM (2)",
 "thumbnailUrl": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_t.jpg",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F7FC982_1A12_D645_41A4_73CE70D2CF63",
  "this.overlay_0F86A049_1A11_D6C4_41AE_A577F4E4560E",
  "this.overlay_0D2F84DC_1A16_DFFD_41AD_D85CEF1893C5",
  "this.overlay_0CAFA6CC_1A16_3BDD_4194_C922CA1308BE",
  "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76EB9C9A_6DA0_F0C7_41CE_5ED43FF4CF2C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -157.23,
   "yaw": -113.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5"
  },
  {
   "backwardYaw": 148.76,
   "yaw": -165.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "STARIS",
 "id": "panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618",
 "thumbnailUrl": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_04FB6C1D_1A16_4E7F_41B4_F2CBB18BAF90",
  "this.overlay_3B11E6C0_1A16_DBC5_41B9_141EA8075A60",
  "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -20.32,
  "class": "PanoramaCameraPosition",
  "pitch": -4.27
 },
 "id": "panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -93.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_773AEDB5_6DA0_F0CD_41C4_3CBD193253D6",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 31.94,
   "yaw": -86.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2"
  },
  {
   "backwardYaw": 9.58,
   "yaw": -156.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6"
  },
  {
   "backwardYaw": -0.72,
   "yaw": 46.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6"
  },
  {
   "backwardYaw": -111.76,
   "yaw": 126.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 3 (3)",
 "id": "panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51",
 "thumbnailUrl": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3FCC7A2B_1A32_CA5B_41A0_774B630966E1",
  "this.overlay_3DF0CF8C_1A32_4A5D_4188_710F0FDC025B",
  "this.overlay_315B2DFA_1A31_C9C5_419E_3508DD02EAFC",
  "this.overlay_307A19AC_1A36_565D_41B3_8C5D48F63445",
  "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_tcap0"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_127B8072_19F2_76C5_417F_336332350224",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_127B8072_19F2_76C5_417F_336332350224_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 49.29,
  "class": "PanoramaCameraPosition",
  "pitch": -2.8
 },
 "id": "panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 48.44,
  "class": "PanoramaCameraPosition",
  "pitch": -0.52
 },
 "id": "panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 23.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_770EBDB5_6DA0_F0CD_41AD_034DC80C4753",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 121.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77A32D57_6DA0_F04D_41CF_0C6ACE4C90EF",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7413BD28_6DA0_F1C3_41CB_C2CD4B69ED80",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -120.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_768E1E04_6DA0_F3C3_41B7_9422181903FE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 151.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76B77C7B_6DA0_F045_41B8_F1826A7B12A5",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -156.48,
   "yaw": 9.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 3 (4)",
 "id": "panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6",
 "thumbnailUrl": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_321138EF_1A37_D7DB_41B1_971BBB737F36",
  "this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 34.2,
   "yaw": -101.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E"
  },
  {
   "backwardYaw": 101.53,
   "yaw": -10.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ENTRY edit",
 "id": "panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69",
 "thumbnailUrl": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0E633C7C_1A12_CEBD_4198_04E40CE86B2C",
  "this.overlay_0D244BAC_1A12_4A5D_41B1_6260BCD2A9EA",
  "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 170.86,
   "yaw": 163.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863"
  },
  {
   "backwardYaw": -53.48,
   "yaw": 16.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5"
  },
  {
   "backwardYaw": -38.4,
   "yaw": 79.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DINING",
 "id": "panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3",
 "thumbnailUrl": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0336F0ED_1A12_57DF_41A0_EA705111204D",
  "this.overlay_0010BD4E_1A11_CEDC_418E_A3A7DF7B8155",
  "this.overlay_03BDC143_1A1E_F6CB_4194_8A3161FEA0E7",
  "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -145.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77820D77_6DA0_F04E_41C8_DE7EBCF1F59D",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -73.29,
  "class": "PanoramaCameraPosition",
  "pitch": -21.98
 },
 "id": "panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -37.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74258D0F_6DA0_F1DD_41BC_A45A51FE0B14",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30,
  "class": "PanoramaCameraPosition",
  "pitch": -0.85
 },
 "id": "panorama_12C81858_19F6_36C5_41B0_CEB505971222_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -129.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77371DB5_6DA0_F0CD_4196_7AA2D978AF71",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 22.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7418FD38_6DA0_F1C2_41CA_3A3063EBF2B9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77C25D96_6DA0_F0CF_41A4_0819F12AA489",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.08,
   "yaw": -0.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 1 (2)",
 "id": "panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86",
 "thumbnailUrl": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_04E417A3_1A16_5A44_41B0_B543E3CC20E8",
  "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -42.7,
  "class": "PanoramaCameraPosition",
  "pitch": -0.28
 },
 "id": "panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 147.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7407DD18_6DA0_F1C3_4127_AF5263EAE5C0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 106.03,
  "class": "PanoramaCameraPosition",
  "pitch": -6.63
 },
 "id": "panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -10.77,
   "yaw": 101.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69"
  },
  {
   "backwardYaw": 160.82,
   "yaw": 10.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "FOYER",
 "id": "panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2",
 "thumbnailUrl": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0EF696E1_1A13_FBC7_41B0_C4E3498437B9",
  "this.overlay_0F73F190_1A12_7645_41B7_9ED4617C7245",
  "this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -90.03,
  "pitch": 0
 },
 "id": "camera_774BBDE4_6DA0_F043_41C3_43C579B14EBD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -111.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7747BDD7_6DA0_F04D_41D2_CAA94A1879C0",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 7.57,
   "yaw": 128.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5"
  },
  {
   "backwardYaw": 48.27,
   "yaw": 68.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "LIVING ROOM (4)",
 "id": "panorama_12D8100B_19F6_565B_41A9_F004463EFE7D",
 "thumbnailUrl": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0D76E3A0_1A16_7A45_41A3_D42024073DDA",
  "this.overlay_0DD0D9FA_1A11_C9C5_419B_EF79AE659FB0",
  "this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.18,
  "class": "PanoramaCameraPosition",
  "pitch": -2.18
 },
 "id": "panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74DE7D08_6DA0_F1C3_41A2_03F5D9686F7E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74D46CF9_6DA0_F045_41C5_7108988D6149",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 53.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76F7BE13_6DA0_F3C5_41D9_BAC44BE0AEFD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": -172.43,
  "pitch": 0
 },
 "id": "camera_7457CD57_6DA0_F04D_41C4_7FAABF9BE3EB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -136.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76830C8B_6DA0_F0C5_41C2_E4E94C3B8166",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 14.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7773FDD7_6DA0_F04D_41CD_A51295CD2132",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 93.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77234DA5_6DA0_F0CD_41BF_781C1605EADE",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.87,
  "class": "PanoramaCameraPosition",
  "pitch": 17.68
 },
 "id": "panorama_127B8072_19F2_76C5_417F_336332350224_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 130,
  "class": "PanoramaCameraPosition",
  "yaw": 99.64,
  "pitch": 0
 },
 "id": "camera_769B4C9A_6DA0_F0C7_41C7_B2D74496124C",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -140.15,
   "yaw": 5.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77"
  },
  {
   "backwardYaw": 142.73,
   "yaw": 101.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BACK SIDE (2)",
 "id": "panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33",
 "thumbnailUrl": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_012223D4_1A11_D9CD_41AB_21969239F574",
  "this.overlay_07DCEC83_1A12_4E4B_419E_48877C868C9F",
  "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 75.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76A54DF4_6DA0_F043_41C0_27CBC54DA4D9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -31.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_746F8D38_6DA0_F1C2_41D0_875DB872A364",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -100.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77514DE4_6DA0_F043_41B3_0202B5C607BA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.39,
  "class": "PanoramaCameraPosition",
  "pitch": -1.55
 },
 "id": "panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -32.88,
   "yaw": 163.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "POOJA ROOM",
 "id": "panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E",
 "thumbnailUrl": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3ADDD57C_1A12_DEBC_41A2_8B75CF1F0026",
  "this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 80.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76A8FDF4_6DA0_F043_41DB_476D3411BC85",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 86.45,
   "yaw": -46.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_127B8072_19F2_76C5_417F_336332350224_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "OUTSIDE edit",
 "id": "panorama_127B8072_19F2_76C5_417F_336332350224",
 "thumbnailUrl": "media/panorama_127B8072_19F2_76C5_417F_336332350224_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_08729FD2_1A0E_49CA_41B3_FBB0621122B3",
  "this.panorama_127B8072_19F2_76C5_417F_336332350224_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -148.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76F9DE13_6DA0_F3C5_41D9_E67F5FCDF9D9",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.72,
   "yaw": 10.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86"
  },
  {
   "backwardYaw": -0.72,
   "yaw": -102.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 1 (1)",
 "id": "panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043",
 "thumbnailUrl": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_07E151BE_1A16_79BD_41A6_861B6EB1F31E",
  "this.overlay_3A174E04_1A16_CA4D_4180_FCF62640682A",
  "this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77E29D86_6DA0_F0CF_41D0_2368E469EAAB",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 42.49,
   "yaw": -28.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77"
  },
  {
   "backwardYaw": 163.83,
   "yaw": 170.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "KITCHEN (2)",
 "id": "panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863",
 "thumbnailUrl": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_00165400_1A1E_5E45_41B8_9F8A1E60F7D0",
  "this.overlay_008F923B_1A1F_DABB_41B0_39C1FD52B40B",
  "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77E8BD86_6DA0_F0CF_41D1_3FD941DFE5A7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77186DC5_6DA0_F04D_41C8_BAB8411157F1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.65,
  "class": "PanoramaCameraPosition",
  "pitch": -8.69
 },
 "id": "panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -47.2,
   "yaw": 51.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA"
  },
  {
   "backwardYaw": 46.76,
   "yaw": -0.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 3 (5)",
 "id": "panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6",
 "thumbnailUrl": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3203AEB1_1A36_4A47_419A_EB76503BDD83",
  "this.overlay_33A0539C_1A36_DA7C_418F_C94F94D8DAD0",
  "this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -46.19,
   "yaw": 86.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_127B8072_19F2_76C5_417F_336332350224"
  },
  {
   "backwardYaw": -101.96,
   "yaw": 34.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69"
  },
  {
   "backwardYaw": -126.58,
   "yaw": -58.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ENTRNCE edit",
 "id": "panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E",
 "thumbnailUrl": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_09A634BE_1A11_DFBD_4185_29C21E50B7D2",
  "this.overlay_0F0C2F53_1A11_CACB_41B8_6C37B0E811AC",
  "this.overlay_35B03D23_1A12_CE4B_4150_F24D107A02F8",
  "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -163.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76974C9A_6DA0_F0C7_41CC_8AB2091540C7",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7712BDC5_6DA0_F04D_41D9_BFCEA79BC4B1",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 35.21,
   "yaw": -99.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROOM 2 (4)",
 "id": "panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B",
 "thumbnailUrl": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_39EA1925_1A0E_F64F_41A9_21DAC110E8B1",
  "this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74754D38_6DA0_F1C2_41C2_A18C5FC84D3B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_74CD3CF9_6DA0_F045_41CD_5F1D80EB3B4B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 47.67,
  "class": "PanoramaCameraPosition",
  "pitch": -1.01
 },
 "id": "panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -129.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_77DDDDA5_6DA0_F0CD_41D8_5C432915F9BD",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.54,
  "class": "PanoramaCameraPosition",
  "pitch": -18.72
 },
 "id": "panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -144.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_76FA1CAB_6DA0_F0C6_41C7_19539660FC9E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 164.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_763E5E3B_6DA0_F3C5_41D5_76857E01C506",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -131.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_745AAD57_6DA0_F04D_41D9_1D50F719FE26",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 169.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_742AFD18_6DA0_F1C3_4183_11FFC063504A",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -154.72,
   "yaw": 50.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2"
  },
  {
   "backwardYaw": 163.08,
   "yaw": -32.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E"
  },
  {
   "backwardYaw": 153.53,
   "yaw": -114.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12C81858_19F6_36C5_41B0_CEB505971222"
  },
  {
   "backwardYaw": -165.02,
   "yaw": 148.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "CORIDOR",
 "id": "panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7",
 "thumbnailUrl": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_05F46D5B_1A16_4EC4_41AF_00D31C8D2FDA",
  "this.overlay_381C55D7_1A12_59CB_417A_CC36B13BD0FD",
  "this.overlay_3AC05C19_1A13_CE47_4196_A76FA5691183",
  "this.overlay_390876A0_1A12_5A45_41B9_88D40AA5232F",
  "this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_7610BE43_6DA0_F045_41D6_37C25A9C26ED",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -137.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_779F8D77_6DA0_F04E_41D6_775B063ED57B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -58.25,
   "yaw": -126.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E"
  },
  {
   "backwardYaw": 101.28,
   "yaw": 142.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 9,
      "tags": "ondemand",
      "width": 4608,
      "colCount": 9,
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BACK SIDE (1)",
 "id": "panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA",
 "thumbnailUrl": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0636DF66_1A12_CACD_4195_6917B291F0A5",
  "this.overlay_0453372D_1A12_7A5F_4198_A1D2C27CE18B",
  "this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_tcap0"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -28.6,
   "yaw": 42.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863"
  },
  {
   "backwardYaw": 5.81,
   "yaw": -140.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33"
  }
 ],
 "partial": false,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/f/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/f/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/u/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/u/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/r/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/r/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/b/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/b/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/d/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/d/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/l/0/{row}_{column}.jpg",
      "rowCount": 10,
      "tags": "ondemand",
      "width": 5120,
      "colCount": 10,
      "class": "TiledImageResourceLevel",
      "height": 5120
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/l/1/{row}_{column}.jpg",
      "rowCount": 5,
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "KITCHEN (1)",
 "id": "panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77",
 "thumbnailUrl": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "overlays": [
  "this.overlay_00A1F8D0_1A1E_D7C5_41BA_068E82993E31",
  "this.overlay_011163B9_1A1E_5A44_41B3_36356C360005",
  "this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_tcap0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0.22
 },
 "id": "panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "left": 70,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "scrollBarVisible": "rollOver",
 "width": 550,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "top": 34,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 140,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-- SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 115.05,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 641,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.83,
   "image": "this.AnimatedImageResource_318E1F57_1A36_CACB_4182_04B6BFE4A5D6",
   "pitch": -16.02,
   "yaw": -111.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3034ADC3_1A31_C9CB_41AC_4968B1AC5127",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51, this.camera_74754D38_6DA0_F1C2_41C2_A18C5FC84D3B); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.83,
   "yaw": -111.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.54,
   "image": "this.AnimatedImageResource_31924F45_1A36_CACF_41AC_7780B86F892A",
   "pitch": -19.78,
   "yaw": 118.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0DEE9DC1_1A12_49C7_41A4_BFAB3D271431",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5, this.camera_769B4C9A_6DA0_F0C7_41C7_B2D74496124C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 118.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.05,
   "image": "this.AnimatedImageResource_31921F46_1A36_CACD_41B1_56C7C3DD168D",
   "pitch": -12.5,
   "yaw": -53.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0261F2A9_1A12_DA47_419D_E4CEEAF6D529",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3, this.camera_76974C9A_6DA0_F0C7_41CC_8AB2091540C7); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.05,
   "yaw": -53.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.37,
   "image": "this.AnimatedImageResource_3192FF46_1A36_CACD_41A3_19B547ACCFF3",
   "pitch": 2.83,
   "yaw": -157.23,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_02DE7DF6_1A12_49CD_419B_4E46DDE6FF6E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618, this.camera_76EB9C9A_6DA0_F0C7_41CE_5ED43FF4CF2C); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.37,
   "yaw": -157.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.85,
   "image": "this.AnimatedImageResource_3192DF46_1A36_CACD_41A0_6BA73FA06AA9",
   "pitch": -15.76,
   "yaw": -104.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_02EE486F_1A12_56DC_41B1_D3691BA7C027",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6, this.camera_76830C8B_6DA0_F0C5_41C2_E4E94C3B8166); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.85,
   "yaw": -104.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.94,
   "image": "this.AnimatedImageResource_318F4F51_1A36_CAC7_4183_C6C0C28A9087",
   "pitch": -14.26,
   "yaw": -15.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_38C4F335_1A0E_7A4F_417D_4E957E212CDE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C81858_19F6_36C5_41B0_CEB505971222, this.camera_76BD5DF4_6DA0_F043_41AB_B44368C7B246); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.94,
   "yaw": -15.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.96,
   "image": "this.AnimatedImageResource_318F2F52_1A36_CAC5_41B6_33612BD6E9FA",
   "pitch": -14.01,
   "yaw": 35.21,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E8C4EA3_1A0E_CA4B_41AB_64ED17CDD7E9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B, this.camera_76A8FDF4_6DA0_F043_41DB_476D3411BC85); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.96,
   "yaw": 35.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.86,
   "image": "this.AnimatedImageResource_318D8F52_1A36_CAC5_41A4_921F8E06A04A",
   "pitch": -15.51,
   "yaw": 103.79,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E16BE7A_1A0E_4AC5_418E_648AD2CE9703",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E, this.camera_768E1E04_6DA0_F3C3_41B7_9422181903FE); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 103.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "shadow": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.9,
   "image": "this.AnimatedImageResource_318C9F51_1A36_CAC7_419C_3A2435FE0ED1",
   "pitch": -15.01,
   "yaw": -32.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3BD7A20B_1A12_3A44_41B7_0CC69D0B2EF2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D, this.camera_763E5E3B_6DA0_F3C5_41D5_76857E01C506); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.9,
   "yaw": -32.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.83,
   "image": "this.AnimatedImageResource_318F6F51_1A36_CAC7_4191_AB82AA81115D",
   "pitch": -16.02,
   "yaw": 153.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_39C2814C_1A11_D6DC_41AF_469508A14CE7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7, this.camera_760EFE3B_6DA0_F3C5_41D5_EDCE2B01B2EB); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.83,
   "yaw": 153.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.02
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12C81858_19F6_36C5_41B0_CEB505971222_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.02,
   "image": "this.AnimatedImageResource_3193EF45_1A36_CACF_41B4_FEF76FAE56E4",
   "pitch": -13,
   "yaw": -30.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D0515BD_1A16_59BF_419A_5772D9DB73F4",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5, this.camera_774BBDE4_6DA0_F043_41C3_43C579B14EBD); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.02,
   "yaw": -30.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_3193CF45_1A36_CACF_4174_B362CF680A2B",
   "pitch": -12,
   "yaw": 48.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D3E81A4_1A16_D64D_4190_18C619905B5C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D, this.camera_7747BDD7_6DA0_F04D_41D2_CAA94A1879C0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.07,
   "yaw": 48.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14,
   "image": "this.AnimatedImageResource_318C1F53_1A36_CACB_41AC_556D6711DF1B",
   "pitch": -13.25,
   "yaw": -154.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3E686539_1A31_DE44_416A_3CC63E47BCC6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7, this.camera_77371DB5_6DA0_F0CD_4196_7AA2D978AF71); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14,
   "yaw": -154.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.02,
   "image": "this.AnimatedImageResource_318CEF53_1A36_CACB_41B1_C48019DE8EFF",
   "pitch": -13,
   "yaw": 31.94,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3F5F4FA1_1A32_4A44_41B1_C94F05359038",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51, this.camera_77234DA5_6DA0_F0CD_41BF_781C1605EADE); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.02,
   "yaw": 31.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_318CBF54_1A36_CACD_41AB_2734F0B2704A",
   "pitch": -12,
   "yaw": -51.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3F3EB3B2_1A32_3A45_41B9_5D0CD28694E1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA, this.camera_77DDDDA5_6DA0_F0CD_41D8_5C432915F9BD); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.07,
   "yaw": -51.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.8,
   "image": "this.AnimatedImageResource_318C5F52_1A36_CAC5_41B4_360E0C76B6BA",
   "pitch": -16.39,
   "yaw": 59.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_39DDDDD2_1A0F_C9C5_41A9_A698502B940A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D, this.camera_77BDCD67_6DA0_F04E_41C9_9746679C51E6); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.8,
   "yaw": 59.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.39
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.86,
   "image": "this.AnimatedImageResource_318C8F54_1A36_CACD_41B5_FB42B7FF675C",
   "pitch": -15.51,
   "yaw": 50.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3F37C6FB_1A33_DBBB_41B4_E0EEFF886F20",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2, this.camera_747B8D47_6DA0_F04D_41D2_0E6165A3292B); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 50.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.19,
   "image": "this.AnimatedImageResource_318F6F54_1A36_CACD_4192_30C2D251440D",
   "pitch": -9.48,
   "yaw": -47.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3D1B0B42_1A32_4ACE_41B8_A63F4B778F2D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6, this.camera_74414D47_6DA0_F04D_4198_B170154427FE); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.19,
   "yaw": -47.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.76,
   "image": "this.AnimatedImageResource_27720F53_1A16_CACB_41B6_3FDB1B76D1BB",
   "pitch": -17.02,
   "yaw": -38.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22452220_1A12_5A45_41A5_2F1C98820158",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3, this.camera_77514DE4_6DA0_F043_41B3_0202B5C607BA); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.76,
   "yaw": -38.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_1_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14,
   "image": "this.AnimatedImageResource_2772FF53_1A16_CACB_41B7_C795102CA81C",
   "pitch": -13.25,
   "yaw": 43.24,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22451220_1A12_5A45_41B4_E1208A9BBE00",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5, this.camera_76A54DF4_6DA0_F043_41C0_27CBC54DA4D9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14,
   "yaw": 43.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_1_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.58,
   "image": "this.AnimatedImageResource_2772BF53_1A16_CACB_41B5_3153723FB959",
   "pitch": -19.28,
   "yaw": -133.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_22450220_1A12_5A45_41B7_2923A1F10195",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.58,
   "yaw": -133.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.28
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_31937F43_1A36_CACB_41B0_EB0612DF4841",
   "pitch": -12,
   "yaw": 7.57,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F7FC982_1A12_D645_41A4_73CE70D2CF63",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8100B_19F6_565B_41A9_F004463EFE7D, this.camera_77C25D96_6DA0_F0CF_41A4_0819F12AA489); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.07,
   "yaw": 7.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_31935F44_1A36_CACD_41B1_A1726C59CE7A",
   "pitch": -12,
   "yaw": 89.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F86A049_1A11_D6C4_41AE_A577F4E4560E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72, this.camera_77FF8D96_6DA0_F0CF_4191_AA82DDCB3A96); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.07,
   "yaw": 89.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_31932F44_1A36_CACD_41AA_7C12B99CC6F1",
   "pitch": -18.78,
   "yaw": -80.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D2F84DC_1A16_DFFD_41AD_D85CEF1893C5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5, this.camera_77C92D96_6DA0_F0CF_41BB_F830A1839090); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -80.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.91,
   "image": "this.AnimatedImageResource_31930F44_1A36_CACD_41B7_64503378A7EC",
   "pitch": -14.76,
   "yaw": 160.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0CAFA6CC_1A16_3BDD_4194_C922CA1308BE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2, this.camera_77E8BD86_6DA0_F0CF_41D1_3FD941DFE5A7); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 160.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.76
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.43,
   "image": "this.AnimatedImageResource_318D9F4F_1A36_CADB_41B9_54F71C7E7114",
   "pitch": -37.37,
   "yaw": -113.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_04FB6C1D_1A16_4E7F_41B4_F2CBB18BAF90",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5, this.camera_7418FD38_6DA0_F1C2_41CA_3A3063EBF2B9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.43,
   "yaw": -113.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.27,
   "image": "this.AnimatedImageResource_318C6F4F_1A36_CADB_41B7_5036772053FF",
   "pitch": 7.35,
   "yaw": -165.02,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3B11E6C0_1A16_DBC5_41B9_141EA8075A60",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7, this.camera_746F8D38_6DA0_F1C2_41D0_875DB872A364); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.27,
   "yaw": -165.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.35
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.09,
   "image": "this.AnimatedImageResource_318F3F54_1A36_CACD_41A3_D6747ABC940A",
   "pitch": -11.74,
   "yaw": -86.13,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3FCC7A2B_1A32_CA5B_41A0_774B630966E1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2, this.camera_76F9DE13_6DA0_F3C5_41D9_E67F5FCDF9D9); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.09,
   "yaw": -86.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.28,
   "image": "this.AnimatedImageResource_318F1F55_1A36_CACF_41A9_A9EFDB47D7C7",
   "pitch": -6.97,
   "yaw": 46.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3DF0CF8C_1A32_4A5D_4188_710F0FDC025B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6, this.camera_76DAAE23_6DA0_F3C5_41CB_696101E34AE4); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.28,
   "yaw": 46.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.02,
   "image": "this.AnimatedImageResource_318FFF55_1A36_CACF_4177_4FED77496420",
   "pitch": -13,
   "yaw": 126.9,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_315B2DFA_1A31_C9C5_419E_3508DD02EAFC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE, this.camera_762F3E33_6DA0_F3C6_41C3_FADB463A68BC); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.02,
   "yaw": 126.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.66,
   "image": "this.AnimatedImageResource_318FCF56_1A36_CACD_41B6_4D7BE78C4F2C",
   "pitch": -18.28,
   "yaw": -156.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_307A19AC_1A36_565D_41B3_8C5D48F63445",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6, this.camera_76CACE23_6DA0_F3C5_419E_1431087CF550); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.66,
   "yaw": -156.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.28
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.98,
   "image": "this.AnimatedImageResource_318F9F56_1A36_CACD_4173_86F72599AB9C",
   "pitch": -13.75,
   "yaw": 9.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_321138EF_1A37_D7DB_41B1_971BBB737F36",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51, this.camera_770EBDB5_6DA0_F0CD_41AD_034DC80C4753); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.98,
   "yaw": 9.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.74,
   "image": "this.AnimatedImageResource_31901F41_1A36_CAC7_41B9_E2347BC4EB9C",
   "pitch": -17.27,
   "yaw": -101.96,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0E633C7C_1A12_CEBD_4198_04E40CE86B2C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E, this.camera_77820D77_6DA0_F04E_41C8_DE7EBCF1F59D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.74,
   "yaw": -101.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.22,
   "image": "this.AnimatedImageResource_3190FF42_1A36_CAC5_41B8_A30098AC4644",
   "pitch": -8.73,
   "yaw": -10.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D244BAC_1A12_4A5D_41B1_6260BCD2A9EA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2, this.camera_77896D77_6DA0_F04E_41D0_768CCD602726); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.22,
   "yaw": -10.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.76,
   "image": "this.AnimatedImageResource_3192BF47_1A36_CACB_41B3_98E0163D116A",
   "pitch": -17.02,
   "yaw": 16.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0336F0ED_1A12_57DF_41A0_EA705111204D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5, this.camera_74C79CE9_6DA0_F045_41CA_9857F28385C8); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.76,
   "yaw": 16.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_31928F47_1A36_CACB_41A1_0F6E6BD3CC2D",
   "pitch": -12,
   "yaw": 79.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0010BD4E_1A11_CEDC_418E_A3A7DF7B8155",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2246C220_1A12_5A45_41B8_A80D294A42B6, this.camera_74C01CF9_6DA0_F045_41C9_C81BEF9D49B1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.07,
   "yaw": 79.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.96,
   "image": "this.AnimatedImageResource_318D6F47_1A36_CACB_41A7_30734F6DCB7E",
   "pitch": -14.01,
   "yaw": 163.83,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_03BDC143_1A1E_F6CB_4194_8A3161FEA0E7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863, this.camera_76CCCCAB_6DA0_F0C6_4193_CFE52EE49DBA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.96,
   "yaw": 163.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.01
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.64,
   "image": "this.AnimatedImageResource_318DBF4E_1A36_CADD_4194_B20A6E47D4CC",
   "pitch": -18.53,
   "yaw": -0.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_04E417A3_1A16_5A44_41B0_B543E3CC20E8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043, this.camera_7610BE43_6DA0_F045_41D6_37C25A9C26ED); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.64,
   "yaw": -0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.53
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.52,
   "image": "this.AnimatedImageResource_3190DF43_1A36_CACB_41A1_A482C8C513E5",
   "pitch": -20.03,
   "yaw": 101.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0EF696E1_1A13_FBC7_41B0_C4E3498437B9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69, this.camera_742AFD18_6DA0_F1C3_4183_11FFC063504A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.52,
   "yaw": 101.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.25,
   "image": "this.AnimatedImageResource_3190AF43_1A36_CACB_41B1_ABF489549AAA",
   "pitch": -7.98,
   "yaw": 10.84,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F73F190_1A12_7645_41B7_9ED4617C7245",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5, this.camera_74307D18_6DA0_F1C3_41D3_5441F32AA7E4); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.25,
   "yaw": 10.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.76,
   "image": "this.AnimatedImageResource_31939F45_1A36_CACF_41B1_D756C1C39AD7",
   "pitch": -17.02,
   "yaw": 68.12,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0D76E3A0_1A16_7A45_41A3_D42024073DDA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72, this.camera_745AAD57_6DA0_F04D_41D9_1D50F719FE26); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.76,
   "yaw": 68.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.93,
   "image": "this.AnimatedImageResource_31926F45_1A36_CACF_41AD_A7C188128A88",
   "pitch": -14.51,
   "yaw": 128.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0DD0D9FA_1A11_C9C5_419B_EF79AE659FB0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5, this.camera_7457CD57_6DA0_F04D_41C4_7FAABF9BE3EB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.93,
   "yaw": 128.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.51
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.17,
   "image": "this.AnimatedImageResource_31923F49_1A36_CAC7_41B7_242CB7A17397",
   "pitch": -9.99,
   "yaw": 5.81,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_012223D4_1A11_D9CD_41AB_21969239F574",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77, this.camera_74DE7D08_6DA0_F1C3_41A2_03F5D9686F7E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.17,
   "yaw": 5.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.11,
   "image": "this.AnimatedImageResource_31920F49_1A36_CAC7_41B4_8862F1EF2A41",
   "pitch": -11.24,
   "yaw": 101.28,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07DCEC83_1A12_4E4B_419E_48877C868C9F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA, this.camera_74258D0F_6DA0_F1DD_41BC_A45A51FE0B14); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.11,
   "yaw": 101.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.81,
   "image": "this.AnimatedImageResource_318CBF50_1A36_CAC5_417E_B5CF38B5777E",
   "pitch": -16.27,
   "yaw": 163.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3ADDD57C_1A12_DEBC_41A2_8B75CF1F0026",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7, this.camera_7407DD18_6DA0_F1C3_4127_AF5263EAE5C0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.81,
   "yaw": 163.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.37,
   "image": "this.AnimatedImageResource_3196EF3B_1A36_CABB_41A6_2362C871093A",
   "pitch": -2.7,
   "yaw": -46.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08729FD2_1A0E_49CA_41B3_FBB0621122B3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E, this.camera_773AEDB5_6DA0_F0CD_41C4_3CBD193253D6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.37,
   "yaw": -46.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.7
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_127B8072_19F2_76C5_417F_336332350224_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.47,
   "image": "this.AnimatedImageResource_318D1F4E_1A36_CADD_4190_39B740A30D73",
   "pitch": -20.54,
   "yaw": 10.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07E151BE_1A16_79BD_41A6_861B6EB1F31E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86, this.camera_74CD3CF9_6DA0_F045_41CD_5F1D80EB3B4B); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.47,
   "yaw": 10.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.05,
   "image": "this.AnimatedImageResource_318DEF4E_1A36_CADD_41A1_FDDB326E1183",
   "pitch": -12.5,
   "yaw": -102.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3A174E04_1A16_CA4D_4180_FCF62640682A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86, this.camera_74D46CF9_6DA0_F045_41C5_7108988D6149); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.05,
   "yaw": -102.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.5
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.68,
   "image": "this.AnimatedImageResource_318D4F47_1A36_CACB_419F_B1C97CC445FA",
   "pitch": -18.03,
   "yaw": -28.6,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00165400_1A1E_5E45_41B8_9F8A1E60F7D0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77, this.camera_779F8D77_6DA0_F04E_41D6_775B063ED57B); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.68,
   "yaw": -28.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.98,
   "image": "this.AnimatedImageResource_318D1F47_1A36_CACB_41A3_1D878E762444",
   "pitch": -13.75,
   "yaw": 170.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_008F923B_1A1F_DABB_41B0_39C1FD52B40B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3, this.camera_77E29D86_6DA0_F0CF_41D0_2368E469EAAB); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.98,
   "yaw": 170.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.75
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.16,
   "image": "this.AnimatedImageResource_318E7F56_1A36_CACD_41B3_4FE3F0D40CFC",
   "pitch": -10.24,
   "yaw": -0.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3203AEB1_1A36_4A47_419A_EB76503BDD83",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51, this.camera_7413BD28_6DA0_F1C3_41CB_C2CD4B69ED80); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.16,
   "yaw": -0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.16,
   "image": "this.AnimatedImageResource_318E5F57_1A36_CACB_41A0_1AF5991401A2",
   "pitch": -10.24,
   "yaw": 51.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33A0539C_1A36_DA7C_418F_C94F94D8DAD0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA, this.camera_740C3D28_6DA0_F1C3_41D2_F8EAF3E0807C); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.16,
   "yaw": 51.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.24
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.26,
   "image": "this.AnimatedImageResource_31906F3F_1A36_CABB_41B6_2657327F4E2D",
   "pitch": -7.73,
   "yaw": 34.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_09A634BE_1A11_DFBD_4185_29C21E50B7D2",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69, this.camera_76E27E13_6DA0_F3C5_41CC_63DDD934DAC5); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.26,
   "yaw": 34.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.15,
   "image": "this.AnimatedImageResource_31903F41_1A36_CAC7_4192_EBF6C3905F8B",
   "pitch": -10.49,
   "yaw": 86.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0F0C2F53_1A11_CACB_41B8_6C37B0E811AC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_127B8072_19F2_76C5_417F_336332350224, this.camera_76901E04_6DA0_F3C3_41AB_001734A000C6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.15,
   "yaw": 86.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.17,
   "image": "this.AnimatedImageResource_276A4F44_1A16_CACD_4167_EEB879DDADF7",
   "pitch": -9.99,
   "yaw": -58.25,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_35B03D23_1A12_CE4B_4150_F24D107A02F8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA, this.camera_76F7BE13_6DA0_F3C5_41D9_BAC44BE0AEFD); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.17,
   "yaw": -58.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.79,
   "image": "this.AnimatedImageResource_318C3F53_1A36_CACB_419C_2ABAD3FD6292",
   "pitch": -16.52,
   "yaw": -99.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_39EA1925_1A0E_F64F_41A9_21DAC110E8B1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D80741_19F6_5AC7_4194_53D3C58C123D, this.camera_76FA1CAB_6DA0_F0C6_41C7_19539660FC9E); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.79,
   "yaw": -99.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.84,
   "image": "this.AnimatedImageResource_318C4F4F_1A36_CADB_4197_0D340026A90E",
   "pitch": -26.82,
   "yaw": 148.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_05F46D5B_1A16_4EC4_41AF_00D31C8D2FDA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618, this.camera_7773FDD7_6DA0_F04D_41CD_A51295CD2132); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.84,
   "yaw": 148.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.85,
   "image": "this.AnimatedImageResource_318C2F4F_1A36_CADB_41A8_79465D1CF583",
   "pitch": -15.76,
   "yaw": -32.88,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_381C55D7_1A12_59CB_417A_CC36B13BD0FD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E, this.camera_77186DC5_6DA0_F04D_41C8_BAB8411157F1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.85,
   "yaw": -32.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.86,
   "image": "this.AnimatedImageResource_318C0F50_1A36_CAC5_4192_43C5CF266C0B",
   "pitch": -15.51,
   "yaw": 50.03,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3AC05C19_1A13_CE47_4196_A76FA5691183",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2, this.camera_7712BDC5_6DA0_F04D_41D9_BFCEA79BC4B1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 50.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.81,
   "image": "this.AnimatedImageResource_318CDF50_1A36_CAC5_41B9_987878EE6DF7",
   "pitch": -16.27,
   "yaw": -114.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_390876A0_1A12_5A45_41B9_88D40AA5232F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12C81858_19F6_36C5_41B0_CEB505971222, this.camera_776C2DD7_6DA0_F04D_41CD_0B788A6ECB2D); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.81,
   "yaw": -114.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.17,
   "image": "this.AnimatedImageResource_3192DF4C_1A36_CADD_419C_B25802CCD82E",
   "pitch": -9.99,
   "yaw": 142.73,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0636DF66_1A12_CACD_4195_6917B291F0A5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33, this.camera_77B6CD67_6DA0_F04E_41D5_B753EBF39C51); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.17,
   "yaw": 142.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.32,
   "image": "this.AnimatedImageResource_3192BF4C_1A36_CADD_419B_1DFEC2572886",
   "pitch": -5.46,
   "yaw": -126.58,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0453372D_1A12_7A5F_4198_A1D2C27CE18B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E, this.camera_77A32D57_6DA0_F04D_41CF_0C6ACE4C90EF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.32,
   "yaw": -126.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.46
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.86,
   "image": "this.AnimatedImageResource_31938F48_1A36_CAC5_419C_C8466B589E47",
   "pitch": -15.51,
   "yaw": 42.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00A1F8D0_1A1E_D7C5_41BA_068E82993E31",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863, this.camera_76B77C7B_6DA0_F045_41B8_F1826A7B12A5); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.86,
   "yaw": 42.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0_HS_0_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.47,
   "image": "this.AnimatedImageResource_31925F48_1A36_CAC5_41B9_EABDF6EE70FF",
   "pitch": -20.54,
   "yaw": -140.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_011163B9_1A1E_5A44_41B3_36356C360005",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33, this.camera_76BA8C8B_6DA0_F0C5_41BD_14A11D690EC9); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.47,
   "yaw": -140.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54
  }
 ]
},
{
 "rotate": true,
 "class": "TripodCapPanoramaOverlay",
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 40.5,
 "id": "panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "data": {
  "name": "white block"
 },
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 366,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 78,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 7,
 "top": 2,
 "layout": "absolute",
 "minWidth": 1,
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderRadius": 0,
 "shadow": true,
 "visible": false,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "blue block"
 },
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 366,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 46,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 7,
 "top": 86,
 "layout": "absolute",
 "minWidth": 1,
 "shadowSpread": 1,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "borderRadius": 0,
 "shadow": true,
 "visible": false,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0.01
 ]
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 1"
 },
 "left": 10,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "width": 391,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "LOREM IPSUM",
 "fontColor": "#000000",
 "verticalAlign": "top",
 "top": 0,
 "minWidth": 1,
 "height": 75,
 "fontSize": 61,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "class": "Label",
 "propagateClick": true,
 "fontWeight": "bold"
},
{
 "fontFamily": "Oswald",
 "data": {
  "name": "text 2"
 },
 "left": 12,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "width": 385,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "fontColor": "#FFFFFF",
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "textShadowHorizontalLength": 0,
 "textShadowColor": "#000000",
 "top": 90,
 "minWidth": 1,
 "textShadowVerticalLength": 0,
 "height": 44,
 "fontSize": 28,
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "class": "Label",
 "propagateClick": true,
 "fontWeight": "normal"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": 110,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 110,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "91.304%",
 "verticalAlign": "top",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 3,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "top": "10%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "visible": false,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "10%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "top": "10%",
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "top": "10%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "10%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "top": "10%",
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "top": "10%",
 "layout": "vertical",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "shadowVerticalLength": 0,
 "shadowBlurRadius": 25,
 "top": "10%",
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "horizontalAlign": "right",
 "verticalAlign": "top",
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "top": "10%",
 "layout": "vertical",
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_307E0542_1A32_DEC5_41A4_7B030D64CEFE_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318E1F57_1A36_CACB_4182_04B6BFE4A5D6",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31924F45_1A36_CACF_41AC_7780B86F892A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31921F46_1A36_CACD_41B1_56C7C3DD168D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3192FF46_1A36_CACD_41A3_19B547ACCFF3",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44EEE_19F6_4BDD_41B7_E69F7FE990D5_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3192DF46_1A36_CACD_41A0_6BA73FA06AA9",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F4F51_1A36_CAC7_4183_C6C0C28A9087",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F2F52_1A36_CAC5_41B6_33612BD6E9FA",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D80741_19F6_5AC7_4194_53D3C58C123D_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318D8F52_1A36_CAC5_41A4_921F8E06A04A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C9F51_1A36_CAC7_419C_3A2435FE0ED1",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12C81858_19F6_36C5_41B0_CEB505971222_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F6F51_1A36_CAC7_4191_AB82AA81115D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3193EF45_1A36_CACF_41B4_FEF76FAE56E4",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12C96C8D_19F6_4E5F_419A_10190A0B7B72_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3193CF45_1A36_CACF_4174_B362CF680A2B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C1F53_1A36_CACB_41AC_556D6711DF1B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318CEF53_1A36_CACB_41B1_C48019DE8EFF",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B44D6D_19F6_CEDF_41A4_94DA13BF8CE2_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318CBF54_1A36_CACD_41AB_2734F0B2704A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CEEC0B_19F6_4E44_4182_F4F181A8CB4E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C5F52_1A36_CAC5_41B4_360E0C76B6BA",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C8F54_1A36_CACD_41B5_FB42B7FF675C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D851BD_19F6_F9BC_41A5_4B1DD29E78AA_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F6F54_1A36_CACD_4192_30C2D251440D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_1_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_27720F53_1A16_CACB_41B6_3FDB1B76D1BB",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_1_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2772FF53_1A16_CACB_41B7_C795102CA81C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_2246C220_1A12_5A45_41B8_A80D294A42B6_1_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2772BF53_1A16_CACB_41B5_3153723FB959",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31937F43_1A36_CACB_41B0_EB0612DF4841",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31935F44_1A36_CACD_41B1_A1726C59CE7A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31932F44_1A36_CACD_41AA_7C12B99CC6F1",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8FA28_19F6_4A45_41B6_F8BD62657ED5_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31930F44_1A36_CACD_41B7_64503378A7EC",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318D9F4F_1A36_CADB_41B9_54F71C7E7114",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D823A6_19F6_7A4D_41AD_44EA0B4E2618_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C6F4F_1A36_CADB_41B7_5036772053FF",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F3F54_1A36_CACD_41A3_D6747ABC940A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F1F55_1A36_CACF_41A9_A9EFDB47D7C7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318FFF55_1A36_CACF_4177_4FED77496420",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12B56E06_19F6_CA4D_41A9_643B98CF6E51_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318FCF56_1A36_CACD_41B6_4D7BE78C4F2C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8F2F2_19F6_3BC5_41A8_6940A9AE10C6_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318F9F56_1A36_CACD_4173_86F72599AB9C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31901F41_1A36_CAC7_41B9_E2347BC4EB9C",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_126E3F93_19F2_4A4A_41B1_1D024C77ED69_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3190FF42_1A36_CAC5_41B8_A30098AC4644",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3192BF47_1A36_CACB_41B3_98E0163D116A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31928F47_1A36_CACB_41A1_0F6E6BD3CC2D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CCF28B_19F6_5A5B_41B6_470990BBC1B3_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318D6F47_1A36_CACB_41A7_30734F6DCB7E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D9F5FB_19F7_D9BB_41AC_0DCC022E2F86_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318DBF4E_1A36_CADD_4194_B20A6E47D4CC",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3190DF43_1A36_CACB_41A1_A482C8C513E5",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8C567_19F6_3ECB_41AE_3A15B5B556B2_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3190AF43_1A36_CACB_41B1_ABF489549AAA",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31939F45_1A36_CACF_41B1_D756C1C39AD7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8100B_19F6_565B_41A9_F004463EFE7D_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31926F45_1A36_CACF_41AD_A7C188128A88",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31923F49_1A36_CAC7_41B7_242CB7A17397",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12DC5FF2_19F1_C9C5_41AE_9478C248FE33_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31920F49_1A36_CAC7_41B4_8862F1EF2A41",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D814E7_19F7_DFCB_41AA_37467E6F759E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318CBF50_1A36_CAC5_417E_B5CF38B5777E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_127B8072_19F2_76C5_417F_336332350224_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3196EF3B_1A36_CABB_41A6_2362C871093A",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318D1F4E_1A36_CADD_4190_39B740A30D73",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CE737B_19F7_FABB_41B9_0BEB91C33043_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318DEF4E_1A36_CADD_41A1_FDDB326E1183",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318D4F47_1A36_CACB_419F_B1C97CC445FA",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D8A580_19F6_FE45_41B9_CF64CFC4A863_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318D1F47_1A36_CACB_41A3_1D878E762444",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318E7F56_1A36_CACD_41B3_4FE3F0D40CFC",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CF2354_19F6_5ACD_41B0_1CDDA7ACDBD6_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318E5F57_1A36_CACB_41A0_1AF5991401A2",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31906F3F_1A36_CABB_41B6_2657327F4E2D",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31903F41_1A36_CAC7_4192_EBF6C3905F8B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_15A06915_19F1_D64F_41A5_1C6E33664C7E_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_276A4F44_1A16_CACD_4167_EEB879DDADF7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D9DB4F_19F6_4ADC_417F_37FD72E9409B_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C3F53_1A36_CACB_419C_2ABAD3FD6292",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C4F4F_1A36_CADB_4197_0D340026A90E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C2F4F_1A36_CADB_41A8_79465D1CF583",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318C0F50_1A36_CAC5_4192_43C5CF266C0B",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12D875DF_19F6_79FB_419C_36A708ECBEF7_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_318CDF50_1A36_CAC5_41B9_987878EE6DF7",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3192DF4C_1A36_CADD_419C_B25802CCD82E",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_15E6CBBD_19F1_C9BF_41AA_4E7F22DC17EA_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3192BF4C_1A36_CADD_419B_1DFEC2572886",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0_HS_0_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31938F48_1A36_CAC5_419C_C8466B589E47",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_12CE879E_19F6_DA7D_4183_F56C1052EA77_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_31925F48_1A36_CAC5_41B9_EABDF6EE70FF",
 "frameCount": 21,
 "frameDuration": 41
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "transparencyActive": true,
 "width": 60,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "width": 58,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "horizontalAlign": "center",
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "shadow": false,
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_1728A7A7_19F2_DA4B_41B7_AFFFE1EB203B",
  "this.Image_176C2613_19FE_5A4B_413D_866FE7D0CC60"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "shadowColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "paddingRight": 40,
 "borderSize": 0,
 "minHeight": 1,
 "width": "99.394%",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": true,
 "top": "0%",
 "verticalAlign": "top",
 "shadowBlurRadius": 100,
 "shadowSpread": 1,
 "layout": "absolute",
 "minWidth": 1,
 "shadowOpacity": 0,
 "paddingTop": 40,
 "backgroundOpacity": 0,
 "paddingBottom": 40,
 "borderRadius": 0,
 "gap": 10,
 "shadowHorizontalLength": 3,
 "shadow": true,
 "height": "100%",
 "shadowVerticalLength": 0,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container"
 },
 "children": [
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "72.121%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "85%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "50%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 140,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "itemMode": "normal",
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "verticalAlign": "middle",
 "itemLabelFontFamily": "Oswald",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minWidth": 1,
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemThumbnailBorderRadius": 0,
 "shadow": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemWidth": 220,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "paddingBottom": 70,
 "borderRadius": 5,
 "gap": 26,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "class": "ThumbnailGrid",
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "scrollEnabled": true,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "class": "WebFrame",
 "propagateClick": true,
 "data": {
  "name": "WebFrame"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 140,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "55%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "45%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingBottom": 20,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "minHeight": 50,
 "horizontalAlign": "center",
 "width": "25%",
 "borderSize": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Button_26D6B1A7_1A11_D64B_41A6_8E6150F69F36",
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "73.387%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "top": "26%",
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "bottom",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 130,
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "top": "25%",
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "maxHeight": 568,
 "maxWidth": 439,
 "id": "Image_1728A7A7_19F2_DA4B_41B7_AFFFE1EB203B",
 "left": "10.44%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "34.07%",
 "borderSize": 0,
 "url": "skin/Image_1728A7A7_19F2_DA4B_41B7_AFFFE1EB203B.png",
 "minHeight": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "height": "9.923%",
 "top": "-95.9%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "visible": false,
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "Image3707"
 }
},
{
 "maxHeight": 520,
 "maxWidth": 480,
 "id": "Image_176C2613_19FE_5A4B_413D_866FE7D0CC60",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "71.774%",
 "borderSize": 0,
 "url": "skin/Image_176C2613_19FE_5A4B_413D_866FE7D0CC60.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "23.458%",
 "top": "0.38%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "Image3974"
 }
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": -24,
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "horizontalAlign": "center",
 "top": "44.63%",
 "bottom": "51.19%",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "shadow": false,
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 60,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "horizontalAlign": "right",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "class": "ViewerArea",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 1,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "verticalAlign": "middle",
 "bottom": "20%",
 "top": "20%",
 "mode": "push",
 "minWidth": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "10%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "5%",
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "backgroundColorDirection": "vertical",
 "minHeight": 520,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 30,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_26D6B1A7_1A11_D64B_41A6_8E6150F69F36",
 "fontSize": "16px",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "86.598%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "FRONT VIEW",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "fontSize": "16px",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "86.598%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "LIVING ROOM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Panorama List"
 },
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "fontSize": "16px",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverFontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "rollOverBackgroundColorDirection": "horizontal",
 "mode": "push",
 "height": 50,
 "label": "KITCHEN",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "fontSize": "16px",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Inserdt Text",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "MASTER BEDROOM 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 14)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "fontSize": "16px",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "MASTER BEDROOM 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 20)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "fontSize": "16px",
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "MASTER BEDROOM 3",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 25)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "fontSize": "16px",
 "iconURL": "skin/Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "label": "Download Brochure ",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.openLink('files/file_0B0FAC5E_1A0E_CEFC_4182_49227222F35F.pdf', '_blank')",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "visible"
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 78,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 56,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 7,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 44,
 "layout": "horizontal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 7,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "visible"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "fontSize": 18,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Main Entrance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lobby",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Reception",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Reception",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Meeting Area 1",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Meeting Area 2",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Bar",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Chill Out",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Terrace",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Garden",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "fontSize": 18,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "fontSize": 18,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "fontSize": 18,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "fontSize": 18,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "fontSize": 18,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "height": 50,
 "label": "BACK",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "iconBeforeLabel": true,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "line"
 },
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "height": 8,
 "layout": "absolute",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 23,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedLabel": "Lorem Ipsum",
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 7"
 },
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 8"
 },
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 9"
 },
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingLeft": 10,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "Button text 10"
 },
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "label": "Lorem Ipsum",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.99vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundOpacity": 1,
 "fontStyle": "italic",
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "2.39vh",
 "width": 180,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "borderSize": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 50,
 "gap": 5,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "class": "Button",
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "46%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://maps.app.goo.gl/3k3SfPusiH3KzgiT6', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('http://api.whatsapp.com/send?phone=+917778870747', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://shaligrambuildcon.com/projects/shaligram-greens-ii/', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "paddingLeft": 0,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "transparencyActive": false,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "cursor": "hand",
 "class": "IconButton",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 }
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "horizontalAlign": "left",
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "class": "Image",
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 1,
 "width": "75%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.21vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.21vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.21vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "scrollBarWidth": 10,
 "class": "Player",
 "propagateClick": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
