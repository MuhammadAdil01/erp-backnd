import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { LeaveManagementService } from './leave-management.service';
import { CreateLeaveApplicationDto } from './dto/create-leave-application.dto';
import { UpdateLeaveApplicationDto } from './dto/update-leave-application.dto';

@Controller('leave-management')
export class LeaveManagementController {
  constructor(private readonly leaveManagementService: LeaveManagementService) {}

  @Post()
  create(@Body() dto: CreateLeaveApplicationDto) {
    return this.leaveManagementService.create(dto);
  }

  @Get()
  findAll() {
    return this.leaveManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.leaveManagementService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateLeaveApplicationDto) {
    return this.leaveManagementService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.leaveManagementService.remove(id);
  }
}
