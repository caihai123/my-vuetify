<template>
  <div class="about">
    <div>
      <v-btn>默认按钮</v-btn>
      <v-btn color="primary">主要按钮</v-btn>
      <v-btn color="success">成功按钮</v-btn>
      <v-btn color="info">信息按钮</v-btn>
      <v-btn color="warning">警告按钮</v-btn>
      <v-btn color="error">危险按钮</v-btn>
    </div>
    <div>
      <v-btn outlined>朴素按钮</v-btn>
      <v-btn outlined color="primary">主要按钮</v-btn>
      <v-btn outlined color="success">成功按钮</v-btn>
      <v-btn outlined color="info">信息按钮</v-btn>
      <v-btn outlined color="warning">警告按钮</v-btn>
      <v-btn outlined color="error">危险按钮</v-btn>
    </div>
    <div>
      <v-btn text>文本按钮</v-btn>
      <v-btn text color="primary">主要按钮</v-btn>
      <v-btn text color="success">成功按钮</v-btn>
      <v-btn text color="info">信息按钮</v-btn>
      <v-btn text color="warning">警告按钮</v-btn>
      <v-btn text color="error">危险按钮</v-btn>
    </div>
    <div>
      <v-btn rounded>圆角按钮</v-btn>
      <v-btn color="primary" rounded>主要按钮</v-btn>
      <v-btn color="success" rounded>成功按钮</v-btn>
      <v-btn color="info" rounded>信息按钮</v-btn>
      <v-btn color="warning" rounded>警告按钮</v-btn>
      <v-btn color="error" rounded>危险按钮</v-btn>
    </div>
    <div>
      <v-btn fab><v-icon>mdi-television</v-icon></v-btn>
      <v-btn fab color="primary"><v-icon>mdi-television</v-icon></v-btn>
      <v-btn fab color="success"><v-icon>mdi-television</v-icon></v-btn>
      <v-btn fab color="info"><v-icon>mdi-television</v-icon></v-btn>
      <v-btn fab color="error"><v-icon>mdi-television</v-icon></v-btn>
    </div>
    <div>
      <v-btn disabled>默认按钮禁用</v-btn>
      <v-btn disabled outlined>朴素按钮禁用</v-btn>
      <v-btn text disabled>文本按钮禁用</v-btn>
    </div>
    <div>
      <v-btn loading>loading</v-btn>
      <v-btn loading disabled color="primary">loading</v-btn>
      <v-btn loading color="success">loading</v-btn>
      <v-btn loading color="info">loading</v-btn>
      <v-btn loading disabled color="warning">
        loading
        <template v-slot:loader>
          <v-icon>mdi-cached</v-icon>
        </template>
      </v-btn>
      <v-btn loading color="error">
        loading
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>
    </div>
    <div>
      <v-btn icon color="primary"><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon color="success"><v-icon>mdi-star</v-icon></v-btn>
      <v-btn icon color="info"><v-icon>mdi-cached</v-icon></v-btn>
      <v-btn icon color="warning"><v-icon>mdi-thumb-up</v-icon></v-btn>
    </div>
    <div>
      <v-btn x-small color="primary">x-small</v-btn>
      <v-btn small color="success">small</v-btn>
      <v-btn color="info">默认</v-btn>
      <v-btn large color="warning">large</v-btn>
      <v-btn x-large color="error">x-large</v-btn>
    </div>
    <div>
      <v-btn tile color="primary">方形按钮</v-btn>
      <v-btn color="primary">
        <v-icon left>mdi-pencil</v-icon>
        前面图标
      </v-btn>
      <v-btn color="primary">
        后面图标
        <v-icon right>mdi-pencil</v-icon>
      </v-btn>
    </div>
    <v-btn-toggle rounded shaped>
      <v-btn color="primary">主要按钮</v-btn>
      <v-btn color="success">成功按钮</v-btn>
      <v-btn color="info">信息按钮</v-btn>
      <v-btn color="warning">警告按钮</v-btn>
      <v-btn color="error">危险按钮</v-btn>
    </v-btn-toggle>
  </div>
</template>
