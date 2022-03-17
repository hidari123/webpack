import $ from 'jquery'
import './css/index.css'
import './css/index.less'

// 隔行变色
$(function () {
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','cyan')
})