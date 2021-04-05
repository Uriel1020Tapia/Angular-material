import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ITypePercentage } from 'src/app/interfaces/ITask.metadata';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: '#000',
      },
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        // label: function (tooltipItems, data) {
        //   return data.datasets[0].data[tooltipItems.index] +'';
        // },
        // labelColor: function(tooltipItem, chart) {
        //   return {
        //       borderColor:      'rgba(640,0,123,0.9)',
        //       backgroundColor: 'rgb(0, 0, 0)'
        //   };
        // },
        labelTextColor: function(tooltipItem, chart) {
            return '#fff';
        }
      }
    },

    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['rgba(76, 200, 235, 1)', 'rgba(204,255,51,1)', 'rgba(255, 159, 64, 1)'] },
  ];
  public typeData: Array<ITypePercentage> = [];
  constructor(private taskServie:TaskService) { }

  ngOnInit(): void {
    this.getTypePercentage();
  }

  getTypePercentage(){
    this.doughnutChartData =[];
    this.doughnutChartLabels =[];
    this.taskServie.getTypePercentage().subscribe(
    (d) => {
      this.typeData = d;
      d.forEach((type:ITypePercentage) => {
        this.doughnutChartData.push(type.count);
        this.doughnutChartLabels.push(type.type);
      })
    },(err) => console.log(err)
    )
  }
  refreshEmitter(){
    this.getTypePercentage();
  }
}
